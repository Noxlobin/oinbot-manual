"use client";

import Image from "next/image";
import Link from "next/link";
import step1 from "@/public/steps/step-1.png";
import step2 from "@/public/steps/step-2.png";
import step3 from "@/public/steps/step-3.png";
import step4 from "@/public/steps/step-4.png";

const steps = [
  {
    img: step1,
    text: `First, go to <a href="https://discohook.org">https://discohook.org</a> and you will see a sight like the picture (minus the markings) beside. On the website you will see a box that I circled. Click on that box. Go to zemi&rsquo;s number and ask for a discord webhook. She will give it to you. Copy that message. Go back to the website. Click and hold on the box I told you to click on. If you see a paste option, click it. Once you see the text Zemi gave you appear, your&apos;e good to go.`,
  },
  {
    img: step2,
    text: `Next, to make your text not bloated, tap the crosses where it is written "embeds". If you see those big squares in the preview section gone, then you are ok. Otherwise, immeadiatly refresh the page. Start over from Step 1. You might mess something up.`,
  },
  {
    img: step3,
    text: "Now, below the text box I showed it step 1, you can write your message (aka the fun part) there. Click the box and start deleting whatevers in there. Do it till the end. Once it is plain simple and you can't delete anymore, start writing your message. It can be anything you wanted. However, I will be looking for a `hey` in the chat. So for your first message, write `hey` and DON'T CLICK ANYTHING ELSE. Wait till the last step to send a message. Zemi will immeadiatly remind you about this. ",
  },
  {
    img: step4,
    text: "This is the final step. Once you are fully ready to embrace the errors that will (probably) come, click the send button. This will send the message. This will send the message to the Discord server. If you get any errors, repeat from step 1 in a new tab. If you still get errors, just ignore them. We will get a notification and Zemi will inform you. Keep in mind you won&quot;t see the messages, so Zemi will show you the last five messages. Now you are able to chat on discord!!!",
  },
];

export default function Home() {
  return (
    <main className="">
      <header className=" bg-blue-600 text-white px-4 py-3 pb-5 text-center shadow-sm shadow-slate-500">
        <p className="font-extrabold text-lg ">oinbot manual</p>
        <p className="mt-1 font-semibold text-sm">text us</p>
      </header>

      <p className="m-6 w-fit">
        This is the <span className="font-semibold">DISCORD OINBOT MANUAL</span>
        !!! This is for you, Pinkie. If you are someone other than Pinkie or
        Zemi, get outta here. You won&apos;t understand anything. I know you
        cannot pass the captcha of making a discord account, so I made a website
        dedicated to you bypassing one. This is a tutorial, so be greatful I
        made one. I just want to say, unless you got a webhook fetish, we
        won&apos;t help you with passing the captcha. I assume you are on
        mobile. And discord, please don&apos;t sue us. Without futher ado, lets
        make you a webhook:
      </p>

      <div className=" w-[70%] flex items-center flex-col space-y-10">
        {steps.map((step) => (
          <div className="flex space-x-2 h-96 w-[50.632rem] " key={step.text}>
            <p
              className="w-[90%] flex-shrink-0"
              dangerouslySetInnerHTML={{ __html: step.text }}
            ></p>
            <Image
              alt="Image of the webhook link getting pasted "
              src={step.img}
            ></Image>
          </div>
        ))}
      </div>
    </main>
  );
}
