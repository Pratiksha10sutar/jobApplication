
import React from "react";

const Card = ({
  users,
  deleteUser,
  ind,
  setUpdatedData,
  setToggle,
}) => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-md">

        {/* Header */}
        <div className="flex flex-col gap-4 bg-blue-700 p-5 sm:flex-row sm:items-center sm:gap-6">
          <img
            src={users.image}
            alt=""
            className="h-20 w-20 shrink-0 rounded-full border-4 border-white object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/150";
            }}
          />

          <div className="min-w-0">
            <h1 className="break-words text-xl font-semibold text-white sm:text-2xl">
              {users.name}
            </h1>

            <p className="mt-1 break-words text-sm text-blue-100 sm:text-base">
              {users.jobRole}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 lg:p-7 bg-[#181A1B] text-[#E8E6E3]">

          {/* Personal Information */}
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
              Personal Information
            </h3>

            <div className="space-y-2 text-sm sm:text-base">
              <p className="break-words">
                <span className="font-medium text-gray-600">Email:</span>{" "}
                {users.email}
              </p>

              <p>
                <span className="font-medium text-gray-600">Mobile:</span>{" "}
                {users.mobile}
              </p>

              <p>
                <span className="font-medium text-gray-600">DOB:</span>{" "}
                {users.dob}
              </p>

              <p>
                <span className="font-medium text-gray-600">Gender:</span>{" "}
                {users.gender}
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6 border-t pt-5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
              Education
            </h3>

            <div className="space-y-2 text-sm sm:text-base">
              <p className="break-words">
                <span className="font-medium text-gray-600">
                  Qualification:
                </span>{" "}
                {users.highEdu}
              </p>

              <p className="break-words">
                <span className="font-medium text-gray-600">
                  College:
                </span>{" "}
                {users.college}
              </p>

              <p>
                <span className="font-medium text-gray-600">
                  Graduation:
                </span>{" "}
                {users.eduYear}
              </p>

              <p>
                <span className="font-medium text-gray-600">CGPA:</span>{" "}
                {users.CGPA}
              </p>
            </div>
          </div>

          {/* Professional Information */}
          <div className="mb-6 border-t pt-5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
              Professional Information
            </h3>

            <div className="space-y-2 text-sm sm:text-base">
              <p className="break-words">
                <span className="font-medium text-gray-600">Role:</span>{" "}
                {users.jobRole}
              </p>

              <p>
                <span className="font-medium text-gray-600">
                  Experience:
                </span>{" "}
                {users.Exp}
              </p>

              <p className="break-words">
                <span className="font-medium text-gray-600">
                  Skills:
                </span>{" "}
                {users.skills}
              </p>

              <p>
                <span className="font-medium text-gray-600">
                  Expected Salary:
                </span>{" "}
                ₹{users.salary}
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mb-6 border-t pt-5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
              Additional Information
            </h3>

            <div className="space-y-2 text-sm sm:text-base">
              <p className="break-words">
                <span className="font-medium text-gray-600">
                  Location:
                </span>{" "}
                {users.location}
              </p>

              <p>
                <span className="font-medium text-gray-600">
                  Notice Period:
                </span>{" "}
                {users.noticePeriod || "Not provided"}
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2 border-t pt-5">
            {users.linkedin && (
              <a
                href={users.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100"
              >
                LinkedIn
              </a>
            )}

            {users.github && (
              <a
                href={users.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
              >
                GitHub
              </a>
            )}

            {users.portfolio && (
              <a
                href={users.portfolio}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-purple-50 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-100"
              >
                Portfolio
              </a>
            )}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 border-t pt-5 sm:flex-row">
            <button
              onClick={() => {
                setUpdatedData(users);
                setToggle((prev) => !prev);
              }}
              type="button"
              className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:flex-1"
            >
              Update
            </button>

            <button
              onClick={() => deleteUser(ind)}
              type="button"
              className="w-full rounded-lg bg-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600 sm:flex-1"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
