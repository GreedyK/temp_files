import { ItemProps } from "@/types"

const SituationItem = ({
  id,
  content
}: ItemProps) => (
  <div className="
    flex
    items-center
    justify-center
    w-80
    h-80
    lg:w-5/12
  ">
    <div className="
      flex
      flex-col
      items-center
      rounded-full
      bg-asagao-dark2
      h-72
      w-72
      p-10
      text-blue-50
      tracking-wider
      leading-10
      shadow-xl
    ">
      <p className="
        text-5xl
        font-bold
      ">{id}</p>
      <div className="
        mt-6
        w-full
      ">
        <p className="
          text-xl
        ">{content}</p>
      </div>
    </div>
  </div>
)

export default SituationItem
