import styled from "styled-components";

const Container = styled.section`
  height: 478px;
  width: 500px;
  border-radius: 12px;
  margin-bottom: 30px;
  background-color: white;
  box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.1);
  z-index: 5;
`;
const Inner = styled.div`
  margin: 60px 80px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.span`
  font-weight: 900;
  text-align: center;
  line-height: 1.4;
  font-size: 48px;
`;
const DateByToday = styled.span`
  font-weight: 700;
  margin-top: 28px;
  text-align: center;
  line-height: 1.4;
  font-size: 20px;
`;
const CheckText = styled.span`
  font-weight: 700;
  margin-top: 28px;
  text-align: center;
  line-height: 1.4;
  font-size: 20px;
`;
const WeekNo = styled.span`
  color: rgb(74, 144, 226);
`;
const InputPhone = styled.input`
  width: 100%;
  margin-top: 24px;
  padding: 0 15px;
  height: 40px;
  border-radius: 8px;
  border: 2px solid #dedede;
  &:focus {
    outline: none;
  }
`;
const SearchBtn = styled.div`
  width: 100%;
  height: 45px;
  text-align: center;
  background-color: #4a91e2;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  :hover {
    background-color: #2275d7;
  }
`;
const { year, month, weekNo } = weekNumberByMonth();
const InputContainer = () => (
  <Container>
    <Inner>
      <Title>RETRO</Title>
      <DateByToday>
        {year}년 {month}월{" "}
        <WeekNo>
          {weekNo}주차<br></br>
        </WeekNo>{" "}
        당첨자 발표
      </DateByToday>
      <CheckText>지금 바로, 당첨을 확인하세요!</CheckText>
      <InputPhone placeholder="휴대폰번호 ('-'제외)" type="number"></InputPhone>
      <SearchBtn>당첨 조회하기</SearchBtn>
    </Inner>
  </Container>
);
export default InputContainer;

function weekNumberByMonth() {
  const now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth() + 1;

  const weekNumberByThurFnc = (paramDate) => {
    const year = paramDate.getFullYear();
    const month = paramDate.getMonth();
    const date = paramDate.getDate();

    const firstDate = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDate.getDay() === 0 ? 7 : firstDate.getDay();
    const lastDayOfweek = lastDate.getDay();

    const lastDay = lastDate.getDate();

    const firstWeekCheck =
      firstDayOfWeek === 5 || firstDayOfWeek === 6 || firstDayOfWeek === 7;
    const lastWeekCheck =
      lastDayOfweek === 1 || lastDayOfweek === 2 || lastDayOfweek === 3;

    const lastWeekNo = Math.ceil((firstDayOfWeek - 1 + lastDay) / 7);

    let weekNo = Math.ceil((firstDayOfWeek - 1 + date) / 7);

    if (weekNo === 1 && firstWeekCheck) weekNo = "prev";
    else if (weekNo === lastWeekNo && lastWeekCheck) weekNo = "next";
    else if (firstWeekCheck) weekNo = weekNo - 1;

    return weekNo;
  };

  let weekNo = weekNumberByThurFnc(now);

  if (weekNo === "prev") {
    const afterDate = new Date(year, month - 1, 0);
    year = month === 1 ? year - 1 : year;
    month = month === 1 ? 12 : month - 1;
    weekNo = weekNumberByThurFnc(afterDate);
  }
  if (weekNo === "next") {
    year = month === 12 ? year + 1 : year;
    month = month === 12 ? 1 : month + 1;
    weekNo = 1;
  }

  return { year, month, weekNo };
}
