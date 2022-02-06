import PropTypes from "prop-types";
export default function Header({ title }) {
  return (
    <div>
      <header className="header">{title}</header>
    </div>
  );
}

Header.defaultProps = {
  title: "Countries of the World",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
