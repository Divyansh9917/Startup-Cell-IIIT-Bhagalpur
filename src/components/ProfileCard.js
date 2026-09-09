
function ProfileCard({ name, role, year }) {
  return (
    <div className="bg-white border border-[#D8C5B0] rounded-2xl p-6 shadow-xs hover:shadow-md transition text-center w-64">
      <h3 className="text-xl font-bold text-[#292825]">{name}</h3>
      <p className="text-sm font-semibold text-[#B85C3A] mt-1">{role}</p>
      <p className="text-xs text-[#6F6B5E] mt-2">{year}</p>
    </div>
  );
}

export default ProfileCard;