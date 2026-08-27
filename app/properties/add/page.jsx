import PropertyAddForm from "@/components/PropertyAddForm";

const AddPropertyPage = () => {
  return <section className="bg-blue-50">
    <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white p-6 mb-4 shadow-md rounded-md md:m-0">
            <PropertyAddForm />
        </div>
    </div>
  </section>;
};

export default AddPropertyPage;
