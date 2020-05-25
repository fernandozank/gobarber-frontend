import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0px;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 100px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 25px;
      height: 25px;

      transition: color 0.75s;

      &:hover {
        color: #fff;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #ff9000;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
  }

  span {
    color: #f4ede8;
    transition: color 0.5s;
  }

  strong {
    color: #ff9014;
    transition: color 0.5s;
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    color: #ff9000;
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #ff9000;
      margin: 0 8px;
    }
  }

  /* p {
    margin-top: 8px;
    color: #ff9000;
    font-weight: 500;

    span + span::before {
      content: '|';
      width: 1px;
      height: 16px;
      margin-left: 6px;
      padding-right: 6px;
    }

  } */
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;

    &::before {
      content: '';
      border-radius: 0 10px 10px 0;
      background: #ff9000;
      position: absolute;
      height: 80%;
      width: 5px;
      left: 0;
      top: 10%;
    }

    > img {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      border: 2px solid #ff9000;
    }

    strong {
      font-size: 24px;
      margin-left: 24px;
      color: #f4ede8;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #999591;

      svg {
        color: #ff9000;
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: #999591;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #F4EDE8;
      width: 70px;

      svg {
        color: #ff9000;
        margin-right: 8px;
      }
    }

    div{
      flex: 1;
      background: #3e3b47;
      display: flex;
      align-items: center;
      padding: 16px 24px;
      border-radius: 10px;
      margin-left: 24px;

      img {
        height: 56px;
        width: 56px;
        border-radius: 50%;
      }

      strong {
        font-size: 20px;
        margin-left: 24px;
        color: #f4ede8;
      }
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    background: #28262e;
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;
