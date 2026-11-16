

export default function CheckTags({tags} : {tags: string[]}){
    return (
        <ul className="flex flex-row gap-2">
           {tags.map((t) => (
            <li
                key = {t}
                className="text-sm md:text-base"
            >
                {t}
            </li>
           ))} 
        </ul>
    )
}