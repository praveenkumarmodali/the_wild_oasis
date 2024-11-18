import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";
import { auth } from "../_lib/auth";

async function Reservation({ cabin }) {
  const session = await auth();
  return (
    <div className="grid gird-cols-2 border border-primary-800 min-h-[400px]">
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
