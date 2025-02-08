interface ITypoProps {
  typo?: string;
}

const Config = {
  prop: "typo",
  variants: {
    t01_semi_b: {
      fontWeight: "600",
      fontSize: "24px",
      lineHeight: "normal",
    },
    t02_semi_b: {
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "normal",
    },
    t02_read_semi_b: {
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "140%",
    },
    b01_semi_b: {
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "normal",
    },
    b01_read_semi_b: {
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "150%",
    },
    b01_m: {
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "normal",
    },
    b01_read_m: {
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "150%",
    },
    b02_read_semi_b: {
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "150%",
    },
    b02_m: {
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "normal",
    },
    b02_read_m: {
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "150%",
    },
    b02_r: {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "normal",
    },
    b02_read_r: {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "150%",
    },
    b03_semi_b: {
      fontWeight: "600",
      fontSize: "13px",
      lineHeight: "normal",
    },
    b03_r: {
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "normal",
    },
    l01_m: {
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "normal",
    },
    l01_read_m: {
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "140%",
    },
    c01_m: {
      fontWeight: "500",
      fontSize: "11px",
      lineHeight: "normal",
    }

  },
};

export type { ITypoProps };
export { Config };
