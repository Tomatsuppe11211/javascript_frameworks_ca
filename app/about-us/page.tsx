import Image from 'next/image'


export default function AboutUsPage(){
    return(
        <div className="flex flex-col items-center gap-5 md:gap-10 lg:gap-15">
            <h1 className="text-center text-2xl md:text-3xl">Señor Javier's Online shop</h1>

            <Image 
                className="h-45 w-45 md:h-60 md:w-60"
                src='/images/logo.png'
                alt='Logo'
                height={400}
                width={200}
            />

            <p className="w-[90%] md:w-[60%] text-lg md:text-xl">
                Señor Javier is a great collector. He started with small mexican
                items and expanded to collect items of any kind. He is so good at 
                it so he could open up his Online shop. Today he is gathering items
                from all over the world, and makes it possible for you to get a taste
                from home.
            </p>

            <p className="w-[90%] md:w-[60%] text-lg md:text-xl">
                Señor Javier also owns a local store in Mexico where he displays all
                kinds of international items. Tech, cultural, toys? No worries. Señor
                Javier got it all!
            </p>
        </div>
    )
}