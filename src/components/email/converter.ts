import { EmailContentProps } from "./types";

const convert_into_plain = (email: EmailContentProps) => {
    switch (email.type) {
        case "paragraph":
            return `<p class='leading-relaxed my-6 outline-none'>${email.text}</p>`;
        case "profile":
            return `<a href='${email.link ? email.link : "#"}' ${email.link ? 'target="_blank"' : ""} class='w-fit leading-none space-x-3 flex items-center my-6'><figure><img src="${email.imgSrc}" class='size-10 rounded-md shadow-md'/></figure>${email.name && `<span class='text-xl font-space-grotesk font-bold'>${email.name}</span>`}</a>`;
        case "button":
            return `<div class='my-6'><a href="${email.link ? email.link : "#"}" ${email.link ? 'target="_blank"' : ""}><button class='bg-blue-600 text-white leading-none py-3 px-5 rounded-md'>${email.text}</button></a></div>`;
        case "image":
            return `<figure class='my-6'><img src='${email.src}'${email.alt ? ` alt="${email.alt}"` : ""} class='rounded-xl' /></figure>`;
        case "h1":
            return `<h1 class='text-3xl font-bold mt-8 mb-4'>${email.text}</h1>`;
        case "h2":
            return `<h2 class='text-2xl font-bold mt-8 mb-4'>${email.text}</h2>`;
        case "h3":
            return `<h3 class='text-xl font-bold mt-8 mb-4'>${email.text}</h3>`;
        case "link":
            return `<p class='my-6'><a href="${email.link ? email.link : "#"}" class='underline text-blue-500 font-medium'>${email.text}</a></p>`;
        case "separator":
            return `<hr class='border-gray-300 my-6' />`;
        case "signature":
            return `
            <div><p class='text-gray-500 text-sm mb-[2px]'>From,</p><p class='text-slate-500 text-sm font-bold'>${email.name}</p>${email.role && `<p class='text-gray-500 text-sm'>${email.role}</p>`}${email.address && `<p class='text-gray-500 text-sm'>${email.address}</p>`}</div>`;
        default:
            return "";
    }
};

export const convert_react_to_vanilla = (emails: EmailContentProps[]) => {
    const mail_to_export: string[] = [];

    emails.forEach((email: EmailContentProps) => {
        mail_to_export.push(convert_into_plain(email));
    });

    const plainhtml = mail_to_export.join("");

    const completehtml = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"><script src="https://cdn.tailwindcss.com"></script></head><body style="max-width: 1200px; margin: auto; font-family:'Inter';">${plainhtml}</body></html>`;

    return completehtml;
};
