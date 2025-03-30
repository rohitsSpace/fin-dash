import * as React from "react";

const TransactionIcon = ({ size = 25, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 25 25"
    fill="none"
    {...props}
  >
    <path
      d="M5.20831 22.9167C5.20896 23.469 5.42867 23.9985 5.81923 24.3891C6.20979 24.7797 6.73931 24.9994 7.29164 25H17.7083C18.2606 24.9994 18.7902 24.7797 19.1807 24.3891C19.5713 23.9985 19.791 23.469 19.7916 22.9167V22.0052H5.20831V22.9167Z"
      fill="currentColor"
    />
    <path
      d="M19.7916 2.08333C19.791 1.531 19.5713 1.00148 19.1807 0.610917C18.7902 0.220358 18.2606 0.00065473 17.7083 0L7.29164 0C6.73931 0.00065473 6.20979 0.220358 5.81923 0.610917C5.42867 1.00148 5.20896 1.531 5.20831 2.08333V3.125H19.7916V2.08333Z"
      fill="currentColor"
    />
    <path
      d="M24.7097 6.70052L21.5847 3.44531L20.0819 4.88802L21.3893 6.25H19.7916V8.33333H21.5017L20.1126 9.66459L21.554 11.1688L24.679 8.17396C24.7778 8.07926 24.857 7.96602 24.912 7.8407C24.9671 7.71538 24.9969 7.58045 24.9997 7.44361C25.0026 7.30677 24.9784 7.17071 24.9287 7.04321C24.8789 6.91571 24.8045 6.79926 24.7097 6.70052Z"
      fill="currentColor"
    />
    <path
      d="M16.6666 6.24999H19.7916V4.16666H5.20831V16.6667H8.33331V18.75H5.20831V20.8333H19.7916V8.33332H16.6666V6.24999ZM15.625 10.4167H11.9791C11.841 10.4167 11.7085 10.4715 11.6109 10.5692C11.5132 10.6669 11.4583 10.7994 11.4583 10.9375C11.4583 11.0756 11.5132 11.2081 11.6109 11.3058C11.7085 11.4035 11.841 11.4583 11.9791 11.4583H13.0208C13.6666 11.4577 14.2896 11.697 14.7689 12.1299C15.2482 12.5627 15.5495 13.1582 15.6144 13.8008C15.6793 14.4433 15.5032 15.087 15.1201 15.607C14.7371 16.127 14.1745 16.4861 13.5416 16.6146V17.7083H11.4583V16.6667H9.37498V14.5833H13.0208C13.1589 14.5833 13.2914 14.5285 13.3891 14.4308C13.4868 14.3331 13.5416 14.2006 13.5416 14.0625C13.5416 13.9244 13.4868 13.7919 13.3891 13.6942C13.2914 13.5965 13.1589 13.5417 13.0208 13.5417H11.9791C11.3333 13.5423 10.7103 13.303 10.2311 12.8701C9.75178 12.4372 9.45045 11.8417 9.38554 11.1992C9.32064 10.5567 9.4968 9.91293 9.87983 9.39297C10.2629 8.87301 10.8254 8.51392 11.4583 8.38541V7.29166H13.5416V8.33332H15.625V10.4167Z"
      fill="currentColor"
    />
    <path
      d="M3.49827 16.6667L4.88734 15.3354L3.44593 13.8312L0.320931 16.826C0.222115 16.9207 0.142929 17.034 0.0879011 17.1593C0.0328728 17.2846 0.00308028 17.4195 0.000226477 17.5564C-0.00262733 17.6932 0.0215135 17.8293 0.0712692 17.9568C0.121025 18.0843 0.19542 18.2007 0.290202 18.2995L3.4152 21.5547L4.91807 20.112L3.61064 18.75H5.2083V16.6667H3.49827Z"
      fill="currentColor"
    />
  </svg>
);

export default TransactionIcon;
