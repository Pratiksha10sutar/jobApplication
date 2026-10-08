
import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Form = ({ setUsers, users, setToggle, updatedData }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updatedData,
  });

  const formSubmit = (data) => {
    if (updatedData) {
      setUsers((prev) => {
        const updatedUsers = prev.map((val) => {
          return val.id === updatedData.id ? { ...data } : val;
        });

        localStorage.setItem("users", JSON.stringify(updatedUsers));
        return updatedUsers;
      });
    } else {
      let arr = [...users, { ...data, id: nanoid() }];
      setUsers(arr);
      localStorage.setItem("users", JSON.stringify(arr));
    }

    reset();
    setToggle(false);
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="mx-auto min-h-screen w-full max-w-4xl rounded-2xl border border-gray-800 bg-gray-900 p-5 shadow-2xl sm:p-7 lg:p-10"
      >
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Job Application Form
          </h1>

          <p className="mt-2 text-sm text-gray-400 sm:text-base">
            Fill in your details to apply for a job
          </p>
        </div>

        {/* PERSONAL INFORMATION */}
        <div className="mb-8">
          <h2 className="mb-5 border-b border-gray-700 pb-3 text-lg font-semibold text-gray-100 sm:text-xl">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Full Name
              </label>

              <input
                {...register("name", {
                  required: "Full name is required",
                  pattern: {
                    value: /^\S/,
                    message: "Blank spaces are not allowed",
                  },
                })}
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Email
              </label>

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter valid email",
                  },
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Mobile Number
              </label>

              <input
                {...register("mobile", {
                  required: "Mobile number is required",
                  minLength: {
                    value: 10,
                    message: "Minimum 10 digits are required",
                  },
                  maxLength: {
                    value: 10,
                    message: "Maximum 10 digits are required",
                  },
                })}
                type="tel"
                placeholder="Enter mobile number"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              />

              {errors.mobile && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.mobile.message}
                </p>
              )}
            </div>

            {/* DOB */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Date of Birth
              </label>

              <input
                {...register("dob", {
                  required: "DOB is required",
                  pattern: {
                    value:
                      /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
                    message: "Please enter a valid date of birth",
                  },
                })}
                type="date"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              />

              {errors.dob && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.dob.message}
                </p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Gender
              </label>

              <select
                {...register("gender", {
                  required: "Gender is required",
                })}
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

              {errors.gender && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.gender.message}
                </p>
              )}
            </div>

            {/* Image URL */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Image URL
              </label>

              <input
                {...register("image", {
                  required: "Image-URL is required",
                })}
                type="url"
                placeholder="https://example.com/image.jpg"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              />

              {errors.image && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.image.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="mb-8">
          <h2 className="mb-5 border-b border-gray-700 pb-3 text-lg font-semibold text-gray-100 sm:text-xl">
            Education
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Qualification */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Highest Qualification
              </label>

              <select
                {...register("highEdu", {
                  required: "Highest education is required",
                })}
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              >
                <option value="">Select qualification</option>
                <option>B.Tech</option>
                <option>B.E</option>
                <option>B.Sc</option>
                <option>M.Tech</option>
                <option>MCA</option>
              </select>

              {errors.highEdu && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.highEdu.message}
                </p>
              )}
            </div>

            {/* College */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                College / University
              </label>

              <input
                {...register("college", {
                  required: "College / University name is required",
                })}
                type="text"
                placeholder="Enter college name"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              />

              {errors.college && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.college.message}
                </p>
              )}
            </div>

            {/* Graduation Year */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Graduation Year
              </label>

              <input
                {...register("eduYear", {
                  required: "Graduation year is required",
                })}
                type="number"
                placeholder="2026"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              />

              {errors.eduYear && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.eduYear.message}
                </p>
              )}
            </div>

            {/* CGPA */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                CGPA / Percentage
              </label>

              <input
                {...register("CGPA", {
                  required: "CGPA is required",
                })}
                type="text"
                placeholder="Enter CGPA or percentage"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              />

              {errors.CGPA && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.CGPA.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* PROFESSIONAL INFORMATION */}
        <div className="mb-8">
          <h2 className="mb-5 border-b border-gray-700 pb-3 text-lg font-semibold text-gray-100 sm:text-xl">
            Professional Information
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Job Role */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Job Role
              </label>

              <select
                {...register("jobRole", {
                  required: "Job Role is required",
                })}
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              >
                <option value="">Select job role</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Full Stack Developer</option>
                <option>Java Developer</option>
                <option>React Developer</option>
              </select>

              {errors.jobRole && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.jobRole.message}
                </p>
              )}
            </div>

            {/* Experience */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Experience Level
              </label>

              <select
                {...register("Exp", {
                  required: "Experience level is required",
                })}
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              >
                <option value="">Select experience</option>
                <option>Fresher</option>
                <option>0 - 1 Year</option>
                <option>1 - 2 Years</option>
                <option>2+ Years</option>
              </select>

              {errors.Exp && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.Exp.message}
                </p>
              )}
            </div>

            {/* Skills */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Skills
              </label>

              <input
                {...register("skills", {
                  required: "Skills are required",
                })}
                type="text"
                placeholder="React, JavaScript, Java..."
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              />

              {errors.skills && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.skills.message}
                </p>
              )}
            </div>

            {/* Salary */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Expected Salary
              </label>

              <input
                {...register("salary", {
                  required: "Expected Salary is required",
                })}
                type="number"
                placeholder="Expected salary"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              />

              {errors.salary && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.salary.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* PROFESSIONAL LINKS */}
        <div className="mb-8">
          <h2 className="mb-5 border-b border-gray-700 pb-3 text-lg font-semibold text-gray-100 sm:text-xl">
            Professional Links
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* GitHub */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                GitHub URL
              </label>

              <input
                {...register("github")}
                type="url"
                placeholder="https://github.com/username"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

            {/* LinkedIn */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                LinkedIn URL
              </label>

              <input
                {...register("linkedin", {
                  required: "LinkedIn URL is required",
                })}
                type="url"
                placeholder="https://linkedin.com/in/username"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              />

              {errors.linkedin && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.linkedin.message}
                </p>
              )}
            </div>

            {/* Portfolio */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Portfolio URL
              </label>

              <input
                {...register("portfolio")}
                type="url"
                placeholder="https://yourportfolio.com"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              />
            </div>
          </div>
        </div>

        {/* RESUME */}
        <div className="mb-8">
          <h2 className="mb-5 border-b border-gray-700 pb-3 text-lg font-semibold text-gray-100 sm:text-xl">
            Resume
          </h2>

          <input
            {...register("resume", {
              required: "Resume is required",
            })}
            type="file"
            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-2.5 text-sm text-gray-300 file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-blue-700"
          />

          {errors.resume && (
            <p className="mt-1 text-sm text-red-400">
              {errors.resume.message}
            </p>
          )}
        </div>

        {/* ADDITIONAL INFORMATION */}
        <div className="mb-8">
          <h2 className="mb-5 border-b border-gray-700 pb-3 text-lg font-semibold text-gray-100 sm:text-xl">
            Additional Information
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Notice Period */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Notice Period
              </label>

              <select
                {...register("noticePeriod")}
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              >
                <option value="">Select notice period</option>
                <option>Immediate</option>
                <option>15 Days</option>
                <option>30 Days</option>
                <option>60 Days</option>
                <option>90 Days</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Preferred Location
              </label>

              <input
                {...register("location", {
                  required: "Preferred Location is required",
                })}
                type="text"
                placeholder="e.g. Pune, Mumbai"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              />

              {errors.location && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Cover Letter */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Cover Letter / About Yourself
              </label>

              <textarea
                {...register("coverLetter")}
                rows="5"
                placeholder="Tell us about yourself..."
                className="w-full resize-none rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              ></textarea>
            </div>
          </div>
        </div>

        {/* TERMS */}
        <div className="mb-8 flex items-start gap-3">
          <input
            {...register("agree", {
              required: "You must agree to the terms",
            })}
            type="checkbox"
            id="terms"
            className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
          />

          <div>
            <label
              htmlFor="terms"
              className="text-sm text-gray-300"
            >
              I agree to the terms and conditions.
            </label>

            {errors.agree && (
              <p className="mt-1 text-sm text-red-400">
                {errors.agree.message}
              </p>
            )}
          </div>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          {updatedData ? "Update Application" : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default Form;

