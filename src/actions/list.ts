import templateList from '../../config/temp-list'
import {showList} from "../utils";

export default function () {
  const tempList = templateList.map((item) => {
    return ` - ${item}`
  })
  showList(tempList)
}
