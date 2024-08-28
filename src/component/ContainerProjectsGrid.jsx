/* eslint-disable react/prop-types */
export default function ContainerProjectsGrid({ children }) {
  return <div className="grid gap-3 p-5 mx-auto xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-items-center h-fit">{children}</div>;
}
