import styles from "./Table.module.css"
const Table = ({universities}) => {
  return  <table className={styles.table}>
    <thead>
    <tr>
      <th>alpha_two_code</th>
      <th>country</th>
      <th>domains</th>
      <th>name</th>
      <th>web_pages</th>
    </tr>
  </thead>{universities.map((university, i) => {
    const {alpha_two_code,country,domains,name,web_pages}=university

    return (
        <tbody key={i}>
          <tr>
            <td>{alpha_two_code}</td>
            <td>{country}</td>
            <td>{domains}</td>
            <td>{name}</td>
            <td>{web_pages}</td>
          </tr>
        </tbody>
    );
  })} </table>

}
export default Table