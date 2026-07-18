export default function MapLoading() {
  return (
    <div className="flex h-[680px] w-full items-center justify-center bg-[#E6ECD5]">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-[#233F31]/20 border-t-[#233F31]" />

        <p className="mt-5 font-bold text-[#233F31]">
          Loading interactive map...
        </p>
      </div>
    </div>
  );
}