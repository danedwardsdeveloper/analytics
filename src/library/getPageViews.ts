import { MongoClient } from 'mongodb'

import mongoClient from '@/library/mongodb'

import { TimeRange } from '@/components/AppProvider'

import { TableNames } from './dbConfig'

interface PagesData {
  page: string
  views: number
}

interface PageViewsData {
  totalViews: number
  pages: PagesData[]
}

export async function getPageViews(
  databaseName: string,
  timeRange: TimeRange,
): Promise<PageViewsData> {
  let client: MongoClient

  try {
    client = await mongoClient
    const collection = client
      .db(databaseName)
      .collection('page-views' as TableNames)

    const dateFilter =
      timeRange === '30days'
        ? { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
        : {}

    const pipeline = [
      {
        $match: timeRange === '30days' ? { 'views.timestamp': dateFilter } : {},
      },
      {
        $facet: {
          totalViews: [
            {
              $group: {
                _id: null,
                count: { $sum: '$totalViews' },
              },
            },
          ],
          pages: [
            {
              $project: {
                page: 1,
                views: '$totalViews',
              },
            },
            { $sort: { views: -1 } },
          ],
        },
      },
    ]

    const [result] = await collection.aggregate(pipeline).toArray()

    return {
      totalViews: result.totalViews[0]?.count || 0,
      pages: result.pages.map((stat: { page: string; views: number }) => ({
        page: stat.page,
        views: stat.views,
      })),
    }
  } catch (error) {
    console.error('Database error:', error)
    throw new Error('Failed to fetch page views')
  }
}
