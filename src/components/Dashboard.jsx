import CardChart from './CardChart';
import ApprovalsList from './ApprovalsList';

function Dashboard() {
  return (
    <div className="container p-4">
      <CardChart />
      <ApprovalsList />
    </div>
  );
}

export default Dashboard;