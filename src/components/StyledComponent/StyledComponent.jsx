import PropTypes from "prop-types";

import styled from "styled-components";
// встановити плагін vscode-styled-components щоб вспливали пісказки при наборі css тексту

const Title = styled.h2`
  border: 1px solid #3c3a3a;
  /* background-color: ${({ primary }) => (primary ? "#99def5" : "#f599e9")}; */
  background-color: ${(props) =>
    props.primary
      ? "#99def5"
      : "#f599e9"}; //передача пропсу з умовою через тернарний оператор(якщо є primary  пропс то колір блакитний)
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  padding: 25px;
  text-align: center;
`;
const Statistics = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #caebf6;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #3c3a3a;
  font-family: Roboto, sans-serif;
`;

const StatList = styled.ul`
  display: flex;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 70px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #3c3a3a;
  padding: 10px;
`;

const Label = styled.span`
  font-size: 18px;
`;

const Percentage = styled.span`
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 3px;
`;

export const StyledComponent = ({ title, stats }) => {
  return (
    <Statistics>
      <Title>{title}</Title>
      {/* передача пропс primary в заголовку */}
      <Title primary>{title}</Title>
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </Statistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
