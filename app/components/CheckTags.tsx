

export default function CheckTags({tags} : {tags: string[]}){
    const tagsList = []
    
    for(let i = 0; i < tags.length; i++){
        console.log(tags[i])
        tagsList.push(tags[i])
    }

    return (
        <ul className="flex flex-row gap-2">
           {tags.map((t) => (
            <li
                key = {t}
                className="text-xs"
            >
                {t}
            </li>
           ))} 
        </ul>
    )
}