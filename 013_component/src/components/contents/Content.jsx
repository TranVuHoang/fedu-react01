import { useState } from "react";

const Content = (props) => {
  const { title, description, srcImage, orderLg, alt } = props;
  // const state = {
  //   trangThai: 1,
  //   soLuong: 10,
  // };

  const [trangThai, setTrangThai] = useState(1);

  /** #1. Hàm không có tham số */
  const thongBao = () => {
    return (
      alert("Bạn có muốn Edit không?"),
      console.log("Bạn có muốn Edit không?")
    );
  };

  const thongBao2 = () => {
    alert("Bạn có muốn Remote không?");
  };

  /** #2. Hàm có tham số */
  const thongBao3 = (message) => {
    alert(message);
  };

  // Hàm message4
  const message4 = (message) => {
    alert(message);
  };

  // Hàm render Button để hiển thị 4 nút button
  const renderButton = () => {
    return (
      <div className="row">
        <div className="btn d-flex gap-2 justify-content-center">
          <button
            className="btn btn-success"
            onClick={thongBao3.bind(null, "Bạn có muốn Add không?")}
          >
            Add
          </button>
          <button className="btn btn-info" onClick={editClick}>
            Edit
          </button>
          <button className="btn btn-warning" onClick={thongBao2}>
            Remote
          </button>
          <button
            className="btn btn-danger"
            onClick={() => message4("Bạn có muốn Delete không?")}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

  // Hàm render Form để hiển thị form
  const renderForm = () => {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="ten">Edit:</label>
          <input
            type="text"
            name="ten"
            id="ten"
            className="form-control"
            placeholder="Nhập tên"
            defaultValue={title}
            aria-describedby="helpId"
          />
          <button
            className="form-control btn btn-dark mt-2"
            onClick={saveClick}
          >
            Save
          </button>
        </div>
      </form>
    );
  };

  // Hàm kiểm tra trạng thái để hiển thị 4 nút Button hoặc hiển thị Form
  const checkDisplay = () => {
    if (trangThai) {
      return renderButton();
    }
    return renderForm();
  };

  // Hàm editClick
  const editClick = () => setTrangThai(0);

  // hàm saveClick
  const saveClick = () => setTrangThai(1);

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

              {checkDisplay()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
