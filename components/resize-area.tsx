export function ComponentArea({ component }: { component: React.ReactNode }) {
  return (
    <div className=" w-full">
      <div className=" flex  items-center justify-center overflow-hidden bg-gray-100 p-4">
        <div className="relative my-auto h-full w-full ">{component}</div>
      </div>
    </div>
  )
}
