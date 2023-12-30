import Header from "@/components/Header";
import MyH1 from "../_components/MyH1";
import Form from "../_components/Form";
import MyList from "../_components/MyList";

export default function Page() {
  return (
    <div className="flex flex-col max-w-4xl mx-auto mt-40">
      <Header />
      <MyH1 />
      <div className="flex justify-between bg-slate-300">
        <MyList />
        <Form />
      </div>
    </div>
  );
}
