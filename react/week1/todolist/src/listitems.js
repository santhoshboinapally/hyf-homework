
function ListItems(props) {
    return (
      <ul>
        <li>
          ID:{props.id},  TASK:{props.task},     DEADLINE:{props.deadlineDate}
        </li>
      </ul>
    );
  }

export default ListItems;