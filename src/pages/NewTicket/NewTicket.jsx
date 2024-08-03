import "./NewTicket.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

export default function NewTicket() {
  return (
    <div className="page-con">
      <Navbar />
      <div className="main-con">
        <Sidebar />
        <div>
          <p className="text-center heading">Create New Ticket</p>
          <div className="container new_ticket">
            <div className="row mb-4">
              <label htmlFor="" className="offset-1 col-1">
                Ticket No
              </label>
              <input type="text" className="col-3" />
              <label htmlFor="" className="offset-1 col-2">
                Date
              </label>
              <input type="text" className="col-3" />
            </div>
            <div className="row mb-4">
              <label htmlFor="" className="offset-1 col-1">
                Name
              </label>
              <input type="text" className="col-3" />
              <label htmlFor="" className="offset-1 col-2">
                Department
              </label>
              <input type="text" className="col-3" />
            </div>
            <div className="row mb-4">
              <label htmlFor="" className="offset-1 col-11 mb-4">
                Name
              </label>
              <input type="text" className="offset-1 col-10" />
            </div>
            <div className="row mb-4">
              <div className="offset-1 col-5">
                <label htmlFor="" className="row ms-1 mb-4">
                  Category
                </label>
                <input type="text" className="col-9" />
                <label htmlFor="" className="row ms-1 mb-4">
                  Type
                </label>
                <input type="text" className="col-9" />
                <label htmlFor="" className="row ms-1 mb-4">
                  Priority
                </label>
                <input type="text" className="col-9" />
              </div>
              <div className="col-6">
                <label htmlFor="" className="row mb-4">
                  Category
                </label>
                <textarea
                  name=""
                  id=""
                  cols="10"
                  rows="5"
                  className="col-10"
                ></textarea>
              </div>
            </div>
            <div className="row">
              <button className="new_ticket_btn offset-8 col-3">Submit</button>
            </div>
            <br></br>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
