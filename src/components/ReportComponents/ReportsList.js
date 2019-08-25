import React from 'react';
import ReportActions from '../ReportComponents/ReportActions';
import ReportFilters from '../ReportComponents/ReportFilters';
import MonthlyStatementsTable from '../ReportComponents/MonthlyStatementsTable';


const ReportsList = ({onReportClick, onNewReportClick}) => {

  return (
    <>
      <header>
        <h1>Reports</h1>
        <ReportActions onNewReportClick={onNewReportClick} />
      </header>
      <div className='content-wrapper'>
        <ReportFilters />
        <MonthlyStatementsTable onReportClick={onReportClick} />
      </div>
    </>
  );
}

export default ReportsList;