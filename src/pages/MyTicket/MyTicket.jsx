import "./MyTicket.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
export default function MyTicket() {
  return (
    <div className="page-con">
      <Navbar />
      <div className="main-con">
        <Sidebar />
        <div>
          <p className="text-center heading">List of Ticket</p>
          <div className="container my_ticket">
            <div className="row mb-4">
              <input
                type="search"
                className="offset-1 col-2"
                placeholder="Find ticket"
                id="searchBar"
              />
            </div>
            <div className="row">
              <span className="offset-1">
                <label for="" className="me-3">
                  Show:
                </label>
                <select name="" id="" className="d-inline-block">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                </select>
                <p className="d-inline-block ms-2">Entries</p>
              </span>
            </div>
            <div className="row text-center">
              <div className="offset-1 col-1 pt-3 pb-3">Ticket No.</div>
              <div className="col-2 pt-3 pb-3">Login issue</div>
              <div className="col-2 pt-3 pb-3">Status</div>
              <div className="col-2 pt-3 pb-3">Support by</div>
              <div className="col-1 pt-3 pb-3">Date</div>
              <div className="col-2 pt-3 pb-3">Rate</div>
            </div>
            <div className="row data text-center">
              <div className="offset-1 col-1 pt-3 pb-3">
                <Link>1234</Link>
              </div>
              <div className="col-2 pt-3 pb-3">New ticket issue</div>
              <div className="col-2 pt-3 pb-3 ">
                <span className="inProgess p-2">In Progess</span>
              </div>
              <div className="col-2 pt-3 pb-3">Tech Support</div>
              <div className="col-1 pt-3 pb-3">13/08/21</div>
              <div className="col-2 pt-3 pb-3">
                {Array(5)
                  .fill()
                  .map((val, i) => (
                    <StarIcon className="starIcon" key={i} />
                  ))}
              </div>
            </div>
            <div className="row data text-center">
              <div className="offset-1 col-1 pt-3 pb-3">
                <Link>1124</Link>
              </div>
              <div className="col-2 pt-3 pb-3">New ticket</div>
              <div className="col-2 pt-3 pb-3">
                <span className="onHold text-white p-2">On Hold</span>
              </div>
              <div className="col-2 pt-3 pb-3">Operational Team</div>
              <div className="col-1 pt-3 pb-3">14/08/21</div>
              <div className="col-2 pt-3 pb-3">
                {Array(5)
                  .fill()
                  .map((val, i) => (
                    <StarIcon className="starIcon" key={i} />
                  ))}
              </div>
            </div>
            <div className="row data text-center">
              <div className="offset-1 col-1 pt-3 pb-3">
                <Link>1224</Link>
              </div>
              <div className="col-2 pt-3 pb-3">Ticket submission</div>
              <div className="col-2 pt-3 pb-3">
                <span className="closed text-white p-2">Closed</span>
              </div>
              <div className="col-2 pt-3 pb-3">Tech Support</div>
              <div className="col-1 pt-3 pb-3">13/08/21</div>
              <div className="col-2 pt-3 pb-3">
                {Array(5)
                  .fill()
                  .map((val, i) => (
                    <StarIcon className="coloredStar" key={i} />
                  ))}
              </div>
            </div>
            <div className="row data text-center">
              <div className="offset-1 col-1 pt-3 pb-3">
                <Link>1244</Link>
              </div>
              <div className="col-2 pt-3 pb-3">Login issue</div>
              <div className="col-2 pt-3 pb-3">
                <span className="inProgess p-2">In Progess</span>
              </div>
              <div className="col-2 pt-3 pb-3">Operational Team</div>
              <div className="col-1 pt-3 pb-3">14/08/21</div>
              <div className="col-2 pt-3 pb-3">
                {Array(5)
                  .fill()
                  .map((val, i) => (
                    <StarIcon className="starIcon" key={i} />
                  ))}
              </div>
            </div>
            <div className="row data text-center">
              <div className="offset-1 col-1 pt-3 pb-3">
                <Link>1114</Link>
              </div>
              <div className="col-2 pt-3 pb-3">Subject</div>
              <div className="col-2 pt-3 pb-3">
                <span className="inProgess p-2">In Progess</span>
              </div>
              <div className="col-2 pt-3 pb-3">Tech Support</div>
              <div className="col-1 pt-3 pb-3">03/08/21</div>
              <div className="col-2 pt-3 pb-3">
                {Array(5)
                  .fill()
                  .map((val, i) => (
                    <StarIcon className="starIcon" key={i} />
                  ))}
              </div>
            </div>
            <p className="offset-1">Showing 1 to 5 of 5 entries</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
