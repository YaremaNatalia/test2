import PropTypes from "prop-types";
import bootstrap from "bootstrap";
import styled from "styled-components";
// import svgStar from "./icon.svg";
import { ReactComponent as SvgStar } from "./icon.svg"; //імпорт іконки як реакт компонент

// встановити плагін vscode-styled-components щоб вспливали пісказки при наборі css тексту
//!якщо свг потрібно міняти краще інлайн вставити, якщо ні - через img або РЕАКТ КОМПОНЕНТ. так само можна вставляти картинки jpg. краще додавати їх в папку компонента
const Title = styled.h2`
  border: 1px solid #3c3a3a;
  /* background-color: ${({ primary }) =>
    primary ? "#99def5" : "#f599e9"};  деструктиризація */
  background-color: ${(props) =>
    props.primary
      ? "#99def5"
      : "#f599e9"}; //!передача пропсу з умовою через тернарний оператор(якщо є primary  пропс то колір блакитний)
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  padding: 25px;
  margin: ${({ data = "0" }) =>
    data}; //!задаємо пропсу дефолтне значення, якщо дати не буде, застосується дефолт
  /* margin: ${({ data }) =>
    data || "0"}; // !аналогічний запис тернарника, умова або */
  /* margin: ${({ data }) => (data ? data : "0")}; */
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
      {/* щоб вставити іконку з фігми натиснути на ній правою кнопкою, копіювати як свг і вставити в розмітку або в створений файл icon.svg, який потім імпортувати і вставити в тег img. Але вона не оптимізована */}
      {/* <svg viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.4687 21.5002C18.3109 21.5008 18.1568 21.4516 18.0286 21.3596L12 16.989L5.97139 21.3596C5.84259 21.453 5.68742 21.5031 5.52832 21.5025C5.36921 21.5019 5.21441 21.4507 5.08629 21.3564C4.95818 21.262 4.86339 21.1294 4.81563 20.9776C4.76787 20.8258 4.76961 20.6628 4.82061 20.5121L7.17186 13.5479L1.07811 9.36898C0.946113 9.27856 0.846491 9.1483 0.793797 8.99724C0.741103 8.84617 0.7381 8.68221 0.785225 8.52932C0.83235 8.37642 0.927135 8.2426 1.05573 8.14741C1.18432 8.05222 1.33999 8.00065 1.49998 8.00023H9.0178L11.2865 1.0182C11.3354 0.867456 11.4308 0.736071 11.559 0.642887C11.6871 0.549704 11.8415 0.499512 12 0.499512C12.1584 0.499512 12.3128 0.549704 12.441 0.642887C12.5692 0.736071 12.6645 0.867456 12.7134 1.0182L14.9822 8.00257H22.5C22.6602 8.00249 22.8162 8.05371 22.9452 8.14872C23.0741 8.24372 23.1693 8.37753 23.2167 8.53054C23.2642 8.68356 23.2613 8.84773 23.2087 8.99903C23.1561 9.15032 23.0564 9.28079 22.9242 9.37132L16.8281 13.5479L19.178 20.5102C19.216 20.623 19.2267 20.7431 19.2092 20.8608C19.1917 20.9785 19.1464 21.0903 19.0771 21.187C19.0078 21.2837 18.9165 21.3626 18.8107 21.417C18.7049 21.4715 18.5877 21.5 18.4687 21.5002Z"
          fill="url(#paint0_linear_4619_12009)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_4619_12009"
            x1="3.5"
            y1="2.00024"
            x2="18.5"
            y2="22.0002"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F84119" />
            <stop offset="1" stop-color="#F89F19" stop-opacity="0.68" />
          </linearGradient>
        </defs>
      </svg> */}
      {/* <img src={svgStar} alt="" /> */}
      <SvgStar />
      {/* передача пропс primary в заголовку */}
      <Title primary data="10px">
        {title}
      </Title>
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
