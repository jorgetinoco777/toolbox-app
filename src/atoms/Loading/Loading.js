const Loading = ({ isLoading }) => {
  return (
    <div
      aria-label="modal"
      className="modal modal-sm"
      style={{
        display: isLoading ? "block" : "none",
      }}
      tabindex="-1"
    >
      <div className="modal-dialog modal-dialog-centered" style={{ width: 66 }}>
        <div className="modal-content">
          <div className="modal-body">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
