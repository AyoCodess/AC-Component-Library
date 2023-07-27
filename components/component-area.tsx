export function ComponentArea({ component }: { component: React.ReactNode }) {
  return (
    <div className=" h-full w-full">
      <div className=" flex flex-1 items-center justify-center overflow-hidden bg-gray-100 p-4">
        <div className="m-auto h-full w-full ">{component}</div>
      </div>
    </div>
  )
}
