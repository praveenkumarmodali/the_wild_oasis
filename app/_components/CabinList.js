import CabinCard from "@/app/_components/CabinCard";

// api
import { getCabins } from "../_lib/data-service";

// data cached no-store
// import { unstable_noStore } from "next/cache";s

async function CabinList({ filter }) {
  // unstable_noStore();
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayCabins;
  if (filter === "all") displayCabins = cabins;

  if (filter === "small") {
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  }
  if (filter === "medium") {
    displayCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  }
  if (filter === "large") {
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  }

  if (displayCabins.length === 0) {
    return <h2 className="text-center mt-1">No Cabins found</h2>;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.user_id} />
      ))}
    </div>
  );
}

export default CabinList;
