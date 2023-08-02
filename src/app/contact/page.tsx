"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import HeroImage from "@/components/HeroImage";
import { useForm } from "react-hook-form";
import useWeb3forms from "@web3forms/react";
import toast, { Toaster } from "react-hot-toast";

// todo: add toast notification contact form successfully sent

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({ mode: "onTouched" });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const apiKey =
    process.env.EMAIL_KEY || "198343aa-5d56-4e15-8cc2-0e86125bf175";

  const { submit: onSubmit } = useWeb3forms({
    access_key: apiKey,
    settings: {
      from_name: "Astralis Contact Form",
      subject: "New Contact Message",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });
  const notify = () =>
    toast("Message Sent!!", {
      style: {
        background: "transparent",
        border: "1px solid rgb(212, 212, 212)",
        color: "rgb(212,212,212)",
      },
      icon: "✉️",
    });

  return (
    <div className="pb-[72px] flex flex-col my-16 items-center font-mont">
      {/* <HeroImage /> */}
      {/* <hr className="text-neutral-200 w-[90%] self-center mb-12" /> */}
      <div className=" w-[320px]">
        <div className="p-4 rounded-lg bg-transparent w-[320px] border-[1px] m-auto border-neutral-300 shadow shadow-black">
          <form
            className="w-full flex flex-col gap-3 items-center text-[hsl(290,25%,43%)]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-2xl text-neutral-300 text-center">
              Join our email list to stay updated on future performances!
            </h2>
            <div className="flex flex-col w-4/5">
              <input
                type="checkbox"
                id=""
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}
              ></input>
              <label
                htmlFor="email"
                className="flex gap-2 text-neutral-300 pb-[2px]"
              >
                <Mail /> Email:
              </label>
              <input
                type="text"
                placeholder="Email"
                className={`rounded-md px-2 py-1 ${
                  errors.email
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label
                htmlFor="city"
                className="flex gap-2 text-neutral-300 pb-[2px]"
              >
                <MapPin /> City:
              </label>
              <input
                type="text"
                placeholder="City - optional"
                className="rounded-md px-2 py-1"
                {...register("city", {
                  required: false,
                })}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label
                htmlFor="message"
                className="flex gap-2 text-neutral-300 pb-[2px]"
              >
                <MessageCircle /> Leave a message:
              </label>
              <textarea
                className="rounded-md px-2"
                // name="message"
                placeholder="Your Message"
                cols={10}
                rows={3}
                {...register("message", {
                  required: false,
                })}
              />
            </div>
            <button
              type="submit"
              className="w-1/2 duration-300 transition ease-in-out hover:scale-105 border-[1px] rounded-md p-[4px] mt-2 text-neutral-300"
              onClick={notify}
            >
              Submit
            </button>
          </form>
          <Toaster />
        </div>
      </div>
    </div>
  );
}

export default Contact;
