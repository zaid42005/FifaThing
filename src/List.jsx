const List = ({list,setList}) => { // idk what props validation is tbh
    return(
        <div>
            {Object.keys(list).map((item) => (//mapping is yum
            <div key={item}>
              <input
                type="checkbox"
                id={item}
                checked={list[item]}
                onChange={() => setList((prevList) => ({...prevList,[item]: !prevList[item],}))} //keep the list the same except the one clicked
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))} 
        </div>
        
    )
}

export default List 