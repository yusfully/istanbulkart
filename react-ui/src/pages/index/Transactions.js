import React,{Fragment, useEffect,useState,useRef} from "react";
import List from "../../miniApp/components/list/List";
import { useRouteMatch } from "react-router-dom";
import Select from "../../miniApp/components/form/select/Select"
import Form from "../../miniApp/components/form/form/index"
import { fetchTransaction } from "../../redux/actions/transactions.action";
import Scrollable from "../../miniApp/components/slider/Scrollable"
import { connect } from "react-redux";
import { useCardsContext } from "./Provider";

const transactionsData = {
  "askugyfdn92378rtyx9238yrx92":
    [
      
      {
        uid: "042988E2234147180",
        type: "islem",
        islemNo: "2323231",
        date: "04/08/2020, 10:32",
        amount: "100,45",
        balance: "46,93",
        category: "bus",
        title: "İBB Metro",
      },
      {
        uid: "04298303119260",
        type: "islem",
        islemNo: "1220231",
        date: "14/09/2020, 01:10",
        amount: "10,45",
        balance: "16,93",
        category: "bus",
        title: "İETT",
      },
      {
        uid: "042342342115180",
        type: "yukleme", category: "wallet",
        talimatNo: "7422817",
        date: "02/10/2020, 02:30",
        amount: "20,50",
        balance: "3,33",
        title: "Para yükleme",
      },
      {
        uid: "042988E1232115180",
        type: "yukleme", category: "wallet",
        talimatNo: "7449817",
        date: "21/09/2020, 07:35",
        amount: "136,00",
        balance: "123,33",
        title: "Para yükleme",
      },
      {
        uid: "042988E21112315180",
        type: "islem",
        islemNo: "2345231",
        date: "01/10/2020, 21:54",
        amount: "1,45",
        balance: "32,33",
        category: "shop",
        title: "Migros AŞ.",
      },
    
      {
        uid: "0429234133119260",
        type: "islem",
        islemNo: "122023423",
        date: "21/10/2020, 01:10",
        amount: "1,45",
        balance: "46,93",
        category: "bus",
        title: "İETT",
      },
      {
        uid: "042101243115180",
        type: "yukleme", category: "wallet",
        talimatNo: "742342317",
        date: "10/09/2020, 02:30",
        amount: "100,00",
        balance: "183,33",
        title: "Para yükleme",
      },
      {
        uid: "03423991E2115180",
        type: "islem",
        islemNo: "342342",
        date: "24/08/2020, 13:20",
        amount: "12250,99",
        balance: "23,00",
        category: "phone",
        title: "MediaMrkt",
      },
      {
        uid: "04201234140123480",
        type: "islem",
        islemNo: "64261236",
        date: "30/09/2020, 20:36",
        amount: "92,00",
        balance: "223,00",
        category: "compass",
        title: "Cafe",
      },
      {
        uid: "042988E1241235180",
        type: "islem",
        islemNo: "341444535235",
        date: "28/09/2020, 21:53",
        amount: "200,00",
        balance: "123,33",
        category: "mappin",
        title: "Ticket master",
      },
      {
        uid: "04298892315180",
        type: "islem",
        islemNo: "2201234234",
        date: "25/10/2020, 18:53",
        amount: "200,00",
        balance: "123,33",
        category: "globe",
        title: "getir",
      },
      {
        uid: "042234234315180",
        type: "islem",
        islemNo: "2201234234",
        date: "05/10/2020, 18:53",
        amount: "200,00",
        balance: "123,33",
        category: "globe",
        title: "boyner",
      }
    ],

    "98a7f98enxf9q8wenf98nrx7":
    [
     
      {
        uid: "042342342115180",
        type: "yukleme", category: "wallet",
        talimatNo: "7422817",
        date: "02/10/2020, 02:30",
        amount: "5,00",
        balance: "3,33",
        title: "Para yükleme",
      },
      {
        uid: "042988E1232115180",
        type: "yukleme", category: "wallet",
        talimatNo: "7449817",
        date: "21/09/2020, 07:35",
        amount: "204,00",
        balance: "183,33",
        title: "Para yükleme",
      },
      {
        uid: "042988E21112315180",
        type: "islem",
        islemNo: "2345231",
        date: "01/10/2020, 21:54",
        amount: "10,45",
        balance: "32,33",
        category: "shop",
        title: "Migros AŞ.",
      },
      {
        uid: "042988E2234147180",
        type: "islem",
        islemNo: "2323231",
        date: "04/08/2020, 10:32",
        amount: "2,85",
        balance: "46,93",
        category: "bus",
        title: "İBB Metro",
      },
      {
        uid: "04298303119260",
        type: "islem",
        islemNo: "1220231",
        date: "14/09/2020, 01:10",
        amount: "5,45",
        balance: "46,93",
        category: "bus",
        title: "İETT",
      },
    
      {
        uid: "0429234133119260",
        type: "islem",
        islemNo: "122023423",
        date: "21/10/2020, 01:10",
        amount: "1,45",
        balance: "46,93",
        category: "bus",
        title: "İETT",
      },
      {
        uid: "042101243115180",
        type: "yukleme", category: "wallet",
        talimatNo: "742342317",
        date: "10/09/2020, 02:30",
        amount: "21,00",
        balance: "183,33",
        title: "Para yükleme",
      },
      {
        uid: "03423991E2115180",
        type: "islem",
        islemNo: "342342",
        date: "24/08/2020, 13:20",
        amount: "250,99",
        balance: "23,00",
        category: "phone",
        title: "MediaMrkt",
      },
      {
        uid: "04201234140123480",
        type: "islem",
        islemNo: "64261236",
        date: "30/09/2020, 20:36",
        amount: "242,00",
        balance: "223,00",
        category: "compass",
        title: "Cafe",
      },
      {
        uid: "042988E1241235180",
        type: "islem",
        islemNo: "341444535235",
        date: "28/09/2020, 21:53",
        amount: "160,00",
        balance: "123,33",
        category: "mappin",
        title: "Ticket master",
      },
      {
        uid: "04298892315180",
        type: "islem",
        islemNo: "2201234234",
        date: "25/10/2020, 18:53",
        amount: "90,00",
        balance: "123,33",
        category: "shop",
        title: "a101",
      },
      {
        uid: "042234234315180",
        type: "islem",
        islemNo: "2201234234",
        date: "05/10/2020, 18:53",
        amount: "31,00",
        balance: "123,33",
        category: "globe",
        title: "alabama",
      }
    ],
    "ksjhdfna98s7dn9as8nydfaıusfh":
    [
      {
        uid: "042988E1232115180",
        type: "yukleme", category: "wallet",
        talimatNo: "7449817",
        date: "21/09/2020, 07:35",
        amount: "92,00",
        balance: "183,33",
        title: "Para yükleme",
      },
      {
        uid: "042988E21112315180",
        type: "islem",
        islemNo: "2345231",
        date: "01/10/2020, 21:54",
        amount: "10,45",
        balance: "32,33",
        category: "shop",
        title: "Migros AŞ.",
      },
      {
        uid: "042988E2234147180",
        type: "islem",
        islemNo: "2323231",
        date: "04/08/2020, 10:32",
        amount: "1,45",
        balance: "46,93",
        category: "bus",
        title: "İBB Metro",
      },
      {
        uid: "04298303119260",
        type: "islem",
        islemNo: "1220231",
        date: "14/09/2020, 01:10",
        amount: "1,45",
        balance: "46,93",
        category: "bus",
        title: "İETT",
      },
      {
        uid: "042342342115180",
        type: "yukleme", category: "wallet",
        talimatNo: "7422817",
        date: "02/10/2020, 02:30",
        amount: "50,00",
        balance: "183,33",
        title: "Para yükleme",
      },
    
    
      {
        uid: "0429234133119260",
        type: "islem",
        islemNo: "122023423",
        date: "21/10/2020, 01:10",
        amount: "1,45",
        balance: "46,93",
        category: "bus",
        title: "İETT",
      },
      {
        uid: "042101243115180",
        type: "yukleme", category: "wallet",
        talimatNo: "742342317",
        date: "10/09/2020, 02:30",
        amount: "100,00",
        balance: "183,33",
        title: "Para yükleme",
      },
      {
        uid: "03423991E2115180",
        type: "islem",
        islemNo: "342342",
        date: "24/08/2020, 13:20",
        amount: "12250,99",
        balance: "23,00",
        category: "phone",
        title: "MediaMrkt",
      },
      {
        uid: "04201234140123480",
        type: "islem",
        islemNo: "64261236",
        date: "30/09/2020, 20:36",
        amount: "92,00",
        balance: "223,00",
        category: "compass",
        title: "Cafe",
      },
      {
        uid: "042988E1241235180",
        type: "islem",
        islemNo: "341444535235",
        date: "28/09/2020, 21:53",
        amount: "71,00",
        balance: "123,33",
        category: "mappin",
        title: "Ticket master",
      },
      {
        uid: "04298892315180",
        type: "islem",
        islemNo: "2201234234",
        date: "25/10/2020, 18:53",
        amount: "42,00",
        balance: "123,33",
        category: "globe",
        title: "mappin",
      },
      {
        uid: "042234234315180",
        type: "islem",
        islemNo: "2201234234",
        date: "05/10/2020, 18:53",
        amount: "68,00",
        balance: "123,33",
        category: "globe",
        title: "bana bi",
      }
    ]
  ,"23874n293847n928374n92837n":
  [
    {
      uid: "042988E1232115180",
      type: "yukleme", category: "wallet",
      talimatNo: "7449817",
      date: "21/09/2020, 07:35",
      amount: "4,00",
      balance: "183,33",
      title: "Para yükleme",
    },
    {
      uid: "042988E21112315180",
      type: "islem",
      islemNo: "2345231",
      date: "01/10/2020, 21:54",
      amount: "2,45",
      balance: "32,33",
      category: "shop",
      title: "Migros AŞ.",
    },
    {
      uid: "042988E2234147180",
      type: "islem",
      islemNo: "2323231",
      date: "04/08/2020, 10:32",
      amount: "29,45",
      balance: "46,93",
      category: "bus",
      title: "İBB Metro",
    },
    {
      uid: "04298303119260",
      type: "islem",
      islemNo: "1220231",
      date: "14/09/2020, 01:10",
      amount: "321,45",
      balance: "46,93",
      category: "bus",
      title: "İETT",
    },
    {
      uid: "042342342115180",
      type: "yukleme", category: "wallet",
      talimatNo: "7422817",
      date: "02/10/2020, 02:30",
      amount: "23,00",
      balance: "183,33",
      title: "Para yükleme",
    },
  
  
    {
      uid: "0429234133119260",
      type: "islem",
      islemNo: "122023423",
      date: "21/10/2020, 01:10",
      amount: "139,45",
      balance: "46,93",
      category: "bus",
      title: "İETT",
    },
    {
      uid: "042101243115180",
      type: "yukleme", category: "wallet",
      talimatNo: "742342317",
      date: "10/09/2020, 02:30",
      amount: "432,00",
      balance: "183,33",
      title: "Para yükleme",
    },
    {
      uid: "03423991E2115180",
      type: "islem",
      islemNo: "342342",
      date: "24/08/2020, 13:20",
      amount: "50,99",
      balance: "23,00",
      category: "phone",
      title: "MediaMrkt",
    },
    {
      uid: "04201234140123480",
      type: "islem",
      islemNo: "64261236",
      date: "30/09/2020, 20:36",
      amount: "922,00",
      balance: "223,00",
      category: "compass",
      title: "Cafe",
    },
    {
      uid: "042988E1241235180",
      type: "islem",
      islemNo: "341444535235",
      date: "28/09/2020, 21:53",
      amount: "10,00",
      balance: "23,33",
      category: "mappin",
      title: "Ticket master",
    },
    {
      uid: "04298892315180",
      type: "islem",
      islemNo: "2201234234",
      date: "25/10/2020, 18:53",
      amount: "99,00",
      balance: "123,33",
      category: "globe",
      title: "bana bi",
    },
    {
      uid: "042234234315180",
      type: "islem",
      islemNo: "2201234234",
      date: "05/10/2020, 18:53",
      amount: "123,00",
      balance: "123,33",
      category: "shop",
      title: "carfour",
    }
  ]
  ,"asdasda09823740293740dn1283":
  [
    {
      uid: "042988E1232115180",
      type: "yukleme", category: "wallet",
      talimatNo: "7449817",
      date: "21/09/2020, 07:35",
      amount: "20,00",
      balance: "183,33",
      title: "Para yükleme",
    },
    {
      uid: "042988E21112315180",
      type: "islem",
      islemNo: "2345231",
      date: "01/10/2020, 21:54",
      amount: "1,45",
      balance: "32,33",
      category: "shop",
      title: "Migros AŞ.",
    },
    {
      uid: "042988E2234147180",
      type: "islem",
      islemNo: "2323231",
      date: "04/08/2020, 10:32",
      amount: "1,45",
      balance: "46,93",
      category: "bus",
      title: "İBB Metro",
    },
    {
      uid: "04298303119260",
      type: "islem",
      islemNo: "1220231",
      date: "14/09/2020, 01:10",
      amount: "1,45",
      balance: "46,93",
      category: "bus",
      title: "İETT",
    },
    {
      uid: "042342342115180",
      type: "yukleme", category: "wallet",
      talimatNo: "7422817",
      date: "02/10/2020, 02:30",
      amount: "50,00",
      balance: "183,33",
      title: "Para yükleme",
    },
  
  
    {
      uid: "0429234133119260",
      type: "islem",
      islemNo: "122023423",
      date: "21/10/2020, 01:10",
      amount: "1,45",
      balance: "46,93",
      category: "bus",
      title: "İETT",
    },
    {
      uid: "042101243115180",
      type: "yukleme", category: "wallet",
      talimatNo: "742342317",
      date: "10/09/2020, 02:30",
      amount: "100,00",
      balance: "183,33",
      title: "Para yükleme",
    },
    {
      uid: "03423991E2115180",
      type: "islem",
      islemNo: "342342",
      date: "24/08/2020, 13:20",
      amount: "12250,99",
      balance: "23,00",
      category: "phone",
      title: "MediaMrkt",
    },
    {
      uid: "04201234140123480",
      type: "islem",
      islemNo: "64261236",
      date: "30/09/2020, 20:36",
      amount: "92,00",
      balance: "223,00",
      category: "compass",
      title: "Cafe",
    },
    {
      uid: "042988E1241235180",
      type: "islem",
      islemNo: "341444535235",
      date: "28/09/2020, 21:53",
      amount: "200,00",
      balance: "123,33",
      category: "mappin",
      title: "Ticket master",
    },
    {
      uid: "04298892315180",
      type: "islem",
      islemNo: "2201234234",
      date: "25/10/2020, 18:53",
      amount: "200,00",
      balance: "123,33",
      category: "globe",
      title: "carfour",
    },
    {
      uid: "042234234315180",
      type: "islem",
      islemNo: "2201234234",
      date: "05/10/2020, 18:53",
      amount: "200,00",
      balance: "123,33",
      category: "globe",
      title: "getir",
    }
  ]

  
}



const transactionFilters = [
  {
    value: "Harcamalar",
  },
  {
    value: "Yüklemeler",
  },
  {
    value: "Tümü",
  }
];

const transactionDates = [
  {
    value:"Son 30 gün"
  },
  {
    value:"Son 60 gün"
  },
  {
    value:"Son 90 gün"
  }
];

const TransactionList = ({transactions,fetchTransaction,onFinish,type}) => {
  const { cardsState, cardsDispatch}=useCardsContext()
const match=useRouteMatch()
  const [activeId, setId] = useState(match.params.id)
  const [activevTransaction, setTransaction] = useState(transactions)
  const [filters, setFilters] = useState([])
  const [scrollTo, setScroll] = useState(0)
  const [lock, setLock] = useState(cardsState.isLocked)

  const scrollableInner = useRef();
  useEffect(() => {
    filterTransactions()
  }, [filters])
   const filterTransactions=()=>{
    let filteredTransactions
    filters.map((element,index)=>{

    if(element.type){
      if(element.type==="tümü"){
        filteredTransactions=transactions
      }else{
        
        let value=element.type==="yüklemeler" ? "yukleme" : "islem"
        
        filteredTransactions=transactions.filter((element)=> element.type===value)
      }
    }  
if(element.date){
  let value=Number(element.date.split("_")[1])
  let date=new Date()
  let day=date.getDate()
  let month=date.getMonth()+1
  let lastValue=value/30



  filteredTransactions=filteredTransactions.filter((element)=> {
   
if(Number(element.date.split("/")[1])>month-lastValue ){
return element
}else if(Number(element.date.split("/")[1])===month-lastValue){
if(Number(element.date.split("/")[0])>day){
return element
}else return null
}else return null
  })
}

    })

    
    
    
  
    setTransaction(filteredTransactions)
  
  }
useEffect(() => {
  scrollableInner.current.scrollTo(scrollTo)
}, [scrollTo])
  useEffect(() => {
  setLock(cardsState.isLocked)
  }, [cardsState.isLocked])
  const handleFilter=(payload)=>{
   
    
    let filtersArr=[]
    let filt=Object.keys(payload).map((key)=>{
      
      if(payload[key]!==undefined){
        
        filtersArr.push({[[key]]:payload[key]}) 
      }
    })
    
    
   setFilters(filtersArr)
 
  }
const handleCollapseOpened=(height,top,openedPrev)=>{
 
  if(openedPrev){
    setScroll(top)
    
  }else{
    if(scrollTo>top){
     
      setScroll(top)
    }else{
      setScroll(top-114)
    }
    
  }
  

}
  const handleScrollContent = (offset, limit, data) => {
    if (onFinish) {
      if (offset.y === 0) {
        onFinish("start");
      } else if (offset.y === data.limit.y) {
        onFinish("finish");
      } else {
        onFinish("mid");
      }
    }
  };
  useEffect(() => {
    fetchTransaction(transactionsData[match.params.id])
  }, [activeId])
useEffect(() => {
  if(match) setId(match.params.id)
 
}, [match])
 useEffect(() => {
  setTransaction(transactions)
 }, [transactions])

  return (
    <Fragment> 
    <Form onFormChange={(payload)=>handleFilter(payload)}>
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      padding:" 0 10px",

      fontSize: "10pt",
      color: "#8c8c98"
    }} className="sort-actions">
    <Select
    selectedDefault={2}
    pos="left"
              type="single"
              id="type"
              options={transactionFilters}
            >
            </Select>
          <Select
            selectedDefault={2}
            pos="right"
              type="single"
              id="date"
              options={transactionDates}
            ></Select></div></Form>

            <div style={{
              display:"flex",
              flexDirection:"column",
              flex:"1 auto",
              position:"relative"
             
            }}>
            <div style={{
              height: "100%",
              position: "absolute",
              width:"100%"
            }}>
            <Scrollable
            ref={scrollableInner}
            damping={0.1}
            continuousScrolling={true}
            direction="y"
            lock={lock || false}
            onScroll={handleScrollContent}
          >
            <div style={{
      backgroundColor:"#f6f6f7"
    }}>

    
   
    
    
      <List style="atached" platform="ios" addClass="transaction-lists-cover">
        {activevTransaction && activevTransaction.map((element,index) => {
         
          return (

            <List.item  

            
            id={`transaction-${element.islemNo ? element.islemNo : element.talimatNo ? element.talimatNo : index}`}
            key={`transaction-${index}`}
              thumb={{
                radius: "10px",
                backgroundColor: "#ffffff",
                stroke: "#333333",
                svgIcon: `${element.category}`,
                size: 25,
              }}
              action={{
                type: "collapse",
              }}
              onCollapseOpened={(height,top,openedPrev)=>handleCollapseOpened(height,top,openedPrev)}
              align="middle"
              small={element.date}
              text={element.title}
              rightSide={
                <div
                  style={{
                    color: `${
                      element.type === "yukleme" ? "#219653" : "#EB5757"
                    }`,
                  }}
                >
                  {element.amount}
                </div>
              }
            >
              <List.CollapseList>
                <div className="list-transactions-cover">
                  <div className="list-item-transactions">
                    <div className="title">Kart UID</div>
                    <div className="right-side">{element.uid}</div>
                  </div>
                  <div className="list-item-transactions">
                    <div className="title">
                      {(element.type === "yukleme" && "Talimat ") ||
                        (element.type === "islem" && "İşlem ")}
                      No
                    </div>
                    <div className="right-side">{element.talimatNo ? element.talimatNo : element.islemNo ? element.islemNo : "" }</div>
                  </div>
                

                 
                  {element.desc && (
                    <div className="list-item-transactions">
                      <div className="title">Açıklamalar</div>
                      <div className="right-side">{element.desc}</div>
                    </div>
                  )}
                </div>
              </List.CollapseList>
            </List.item>
          );
        })}
      </List>
    </div></Scrollable></div></div></Fragment>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchTransaction: (transactions) => dispatch(fetchTransaction(transactions)),
  
  
  
});
const mapStateToProps = (state) => ({
  transactions: state.transactions.transactions,
  activeCard:state.myCards.activeCard.id
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
