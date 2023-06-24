"use client";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    city: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault;
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData({ ...formData, [name]: value });
  };
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target;
    setMessage(value.value);
    setFormData({ ...formData, message: message });
  };
  return (
    <div className="pb-[72px] flex flex-col items-center">
      <Image
        src={"/images/experiment/image-transparent-background.png"}
        alt="image"
        width={1440}
        height={548}
      />
      <div className=" w-[320px]">
        <div className="p-4 rounded-lg bg-transparent w-[320px] border-[1px] m-auto border-neutral-300 shadow shadow-black">
          <form
            action="submit"
            className="w-full flex flex-col gap-3 items-center text-[hsl(290,25%,43%)]"
            onSubmit={handleFormSubmit}
          >
            <h2 className="text-lg text-neutral-300 text-center">
              Join our email list to stay updated on future performances!
            </h2>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="flex gap-2 text-neutral-300 pb-[2px]"
              >
                <Mail /> Email:
              </label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="rounded-md px-2 py-1"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="city"
                className="flex gap-2 text-neutral-300 pb-[2px]"
              >
                <MapPin /> City:
              </label>
              <input
                type="text"
                placeholder="City"
                name="city"
                className="rounded-md px-2 py-1"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="flex gap-2 text-neutral-300 pb-[2px]"
              >
                <MessageCircle /> Leave a message:
              </label>
              <textarea
                className="rounded-md"
                name="message"
                cols={20}
                rows={5}
                value={formData.message}
                onChange={handleMessageChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-1/2 duration-300 transition ease-in-out hover:scale-105 border-[1px] rounded-md p-[4px] mt-2 text-neutral-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
