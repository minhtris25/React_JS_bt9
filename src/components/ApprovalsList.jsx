function ApprovalsList() {
  const summaryItems = [
    { amount: '$145' },
    { amount: '$213' },
    { amount: '$814' },
  ];

  return (
    <div className="box">
      <h4 className="title is-5">Summary</h4>
      {summaryItems.map((item, index) => (
        <div key={index} className="level">
          <div className="level-left">
            <p>{item.amount}</p>
          </div>
          <div className="level-right">
            <div className="buttons">
              <button className="button is-small is-success">Approve</button>
              <button className="button is-small is-danger">Deny</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApprovalsList;