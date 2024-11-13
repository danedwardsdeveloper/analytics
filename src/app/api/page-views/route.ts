import { NextRequest, NextResponse } from 'next/server'

import { DatabaseNames } from '@/library/dbConfig'
import { getPageViews } from '@/library/getPageViews'

import { TimeRange } from '@/components/AppProvider'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const timeRange = (searchParams.get('timeRange') as TimeRange) || 'alltime'
    const database = searchParams.get('db') as DatabaseNames

    if (!database) {
      return NextResponse.json(
        { error: `db parameter is required` },
        { status: 400 },
      )
    }

    const pageViewsData = await getPageViews(database, timeRange)
    return NextResponse.json(pageViewsData)
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch page views' },
      { status: 500 },
    )
  }
}
