import { connect } from "react-redux";
import Search from "./Search";

const mapStateToProps = (state) => {
    return {
        colorTheme:state.stock.colorTheme
    }
}

export default connect(mapStateToProps, null)(Search)
