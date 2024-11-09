export default function PlacehoderContent() {
  return [1, 2, 3, 4].map((item) => (
    <p
      key={item}
      className="text-slate-600 my-6"
    >{`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt omnis optio vel officiis tempora, ducimus repellat porro quibusdam molestias velit, sunt praesentium! Veritatis repellat inventore deserunt quas animi labore officia.`}</p>
  ))
}
