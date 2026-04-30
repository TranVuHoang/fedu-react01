const Content = (props) => {
  const { title, description, srcImage, orderLg, alt } = props;

  const thongBao = () => {
    alert("Bạn có muốn Edit không?");
  };

  const thongBao2 = () => {
    alert("Bạn có muốn Remote không?");
  };

  return (
    <section id="scroll">
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className={`col-lg-6 order-lg-${orderLg}`}>
            <div className="p-5">
              <img
                className="img-fluid rounded-circle"
                src={srcImage}
                alt={alt}
              />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4">{title}</h2>
              <p>{description}</p>
              <div className="row">
                <div className="btn btn-group">
                  <button className="btn btn-info" onClick={thongBao}>
                    Edit
                  </button>
                  <button className="btn btn-warning" onClick={thongBao2}>
                    Remote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
