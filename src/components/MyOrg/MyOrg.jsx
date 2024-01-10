import "./MyOrg.css";

export function MyOrg(props) {
  return (
    <section className="orgSection">
      <h3 className="title">My Organization</h3>
      <img src="/img/add.png" alt="Add" onClick={props.toggleFormVisibility} />
    </section>
  );
}
