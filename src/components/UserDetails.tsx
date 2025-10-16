interface UserDetailsProps {
  user: any;
}

const UserDetails = (props: UserDetailsProps) => {
  const { user } = props;
  return (
    <div
      style={{
        maxWidth: "400px",
        width: "100%",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        minHeight: "50vh",
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>User Details</h2>
      <div>
        <p>Username: {user.userName}</p>
      </div>
      <div>
        <p>Email: {user.email}</p>
      </div>
      <div>
        <p>Message: {user.message}</p>
      </div>
    </div>
  );
};
export default UserDetails;
