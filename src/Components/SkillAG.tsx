import React, { useState, useMemo } from "react";
import { AgGridReact } from 'ag-grid-react';


const SkillAG = () => {

    // const suppressRowHoverHighlight = true;
    // const columnHoverHighlight = true;

    const [ rowData ] = useState([
        { "MERN Stack": "ReactJS"        , "Data Engineering": "SQL (Structured Query Language)" },
        { "MERN Stack": "NodeJS"         , "Data Engineering": "DBT (Data Build Tool)"           },
        { "MERN Stack": "ExpressJS"      , "Data Engineering": "PySpark"                         },
        { "MERN Stack": "MongoDB"        , "Data Engineering": "Python"                          },
        { "MERN Stack": "RestAPI"        , "Data Engineering": "Snowflake"                       },
        { "MERN Stack": "HTML"           , "Data Engineering": "AWS Services"                    },
        { "MERN Stack": "CSS"            , "Data Engineering": "Azure Services"                  },
        { "MERN Stack": "JavaScript"     , "Data Engineering": "Databricks"                      },
        { "MERN Stack": "TypeScript"     , "Data Engineering": "Docker"                          },
        { "MERN Stack": "Material UI"    , "Data Engineering": "CI/CD"                           },
        { "MERN Stack": "React Bootstrap", "Data Engineering": "Agile Methodology"               },
        { "MERN Stack": "Redux"          , "Data Engineering": "Git"                             },
        { "MERN Stack": "React Router"   , "Data Engineering": "Jupyter Notebook"                },
        { "MERN Stack": "ESLint"         , "Data Engineering": "Postman"                         }
    ]);

    const [ colDefs ] = useState<any>([
        { 
            field: "MERN Stack",
            headerClass: "skills-table-header",
            tooltipValueGetter: (params: any) => `MERN Stack Technology: ${params.value}`,
            headerTooltip: "MERN Stack Technologies"
        },
        { 
            field: "Data Engineering",
            headerClass: "skills-table-header",
            tooltipValueGetter: (params: any) => `Data Engineering Tool: ${params.value}`,
            headerTooltip: "Data Engineering Tools and Technologies"
        }
    ]);

    const rowStyle = useMemo(() => { 
        return { background: '#eee7cf6e', color: "#2b3153", fontSize: '20px' };
    }, []);

    return (
        <div className="ag-grid-div-container" style={{ height: 773, width: "100%"}}>
            <AgGridReact
                rowData={rowData}
                rowStyle={rowStyle}
                columnDefs={colDefs}
                defaultColDef={{    
                    flex: 1,
                    minWidth: 100,
                    sortable: true,
                }}
                rowHeight={50}
                headerHeight={70}
                // tooltipShowDelay={500}
                // suppressRowHoverHighlight={suppressRowHoverHighlight}
                // columnHoverHighlight={columnHoverHighlight}
            />
        </div>
    );

};

export default SkillAG;