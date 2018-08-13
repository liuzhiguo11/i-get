import configObj from '../../config/config.json'
import {showList} from "../utils";

export default function () {
  const tempList = configObj.templateList.map((item) => {
    return ` - ${item}`
  })
  showList(tempList)
}
