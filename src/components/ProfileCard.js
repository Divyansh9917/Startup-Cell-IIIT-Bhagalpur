
function ProfileCard({name,role,year}){
  return(
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition text-center w-64">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-sm font-semibold text-blue-600 mt-1">{role}</p>
      <p className="text-xs text-gray-500 mt-2">{year}</p>
    </div>
  );
}

export default ProfileCard;