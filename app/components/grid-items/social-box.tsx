import Link from "next/link"
import Button from "../button"
import { GridItemInterface } from "../config/site-config"
import Icon from "../Icon"


const SocialBox = ({item} : {item:GridItemInterface} ) => {
  return (
    <div>
{/* header */}
<div>
    <Link href={item.buttonLink ?? ""}>

<div className="flex items-center justify-between">
<Icon type={item.icon ?? ""} color={item.color} />
{item.layout === "2x2" && <Button text={item.buttonTitle ?? ""} secondaryText={item.buttonSecondaryText ?? ""}
color={item.color} />}
</div>


<div className="mt-2">
    <div className="text-lg font-semibold ">{item.title}</div>
    <div className="text-sm text-neutral-500">{item.username}</div>
   {item.description && (<div className=" mt-1 text-sm text-neutral-500 line ">{item.description}</div>)}
</div>
{item.layout === "1x2" && <div className="mt-2"> <Button text={item.buttonTitle ?? ""} secondaryText={item.buttonSecondaryText ?? ""}
color={item.color} /> </div>}
 </Link>
    </div>
    </div>
   
  )
}

export default SocialBox
