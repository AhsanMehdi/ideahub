pragma solidity ^ 0.4 .4;

contract Projects {
  event Transfer(address indexed from, address indexed to, uint value);

  struct Reward {
    uint RewardId;
    uint projectId;
    string RewardDescription;
    string Title;
    string PledgeAmount;
    string EstimatedDilivery;
    string ShippingDetails;

  }

  struct Story {
    string Description;
    string RiskAndChallanges;
    string VedioUrl;
  }

  struct Project {
    string Catagory;
    string Title;
    string Loucation;
    uint ProRewardCount;
    uint TotalGatherdAmount;
    uint voteCount;

  }
  struct ProjectDetails {
    string FundingDuration;
    uint FundingGoal;
    string ImageUrl;
    string ShortDescription;

  }
  uint public projectsCount = 0;
  uint public projectRewardCount = 0;
  mapping(uint => Project) public projectList;
  mapping(uint => Story) public projectStoriesList;
  mapping(uint => ProjectDetails) public projectDetailsList;
  mapping(uint => Reward) public projectRewardList;
  address[16] public DeployerAddress;

  function postProject(string _catagory, string _title, string _loucation, string _fundingDuration, uint _fundingGoal,
    string _imageUrl, string _shortDesr, string _storyDscr, string _risk,
    string _vedioUrl) {



    var newproject = projectList[projectsCount];
    var newDetails = projectDetailsList[projectsCount];
    var newstory = projectStoriesList[projectsCount];

    newproject.Catagory = _catagory;
    newproject.Title = _title;
    newproject.Loucation = _loucation;
    newproject.ProRewardCount = 0;
    newproject.TotalGatherdAmount = 0 ether;
    newproject.voteCount = 0;

    newDetails.FundingDuration =  _fundingDuration ;
    newDetails.FundingGoal = _fundingGoal;
    newDetails.ImageUrl = _imageUrl;
    newDetails.ShortDescription = _shortDesr;

    newstory.Description = _storyDscr;
    newstory.RiskAndChallanges = _risk;
    newstory.VedioUrl = _vedioUrl;




  }

  function getProject(uint _id) public returns(string, string, string, uint, uint) {
    return (projectList[_id].Catagory, projectList[_id].Title, projectList[_id].Loucation, projectList[_id].TotalGatherdAmount, projectList[_id].voteCount);
  }


  function getProjectDetails(uint _id) public returns(string, uint, string, string) {

    return (projectDetailsList[_id].FundingDuration, projectDetailsList[_id].FundingGoal, projectDetailsList[_id].ImageUrl, projectDetailsList[_id].ShortDescription);
  }

  function getProjectStory(uint _id) public returns(string, string, string) {
    return (
      projectStoriesList[_id].Description, projectStoriesList[_id].RiskAndChallanges,
      projectStoriesList[_id].VedioUrl
    );
  }




  function getCountProjects() public returns(uint) {
    return projectsCount;
  }

  function setReward(uint _proId, string _title, string _plegeAmount, string _descr, string _estimatedDilivery, string _shippingDetails) {

    projectList[0].ProRewardCount = projectList[0].ProRewardCount + 1;
    var newreward = projectRewardList[projectRewardCount];
    projectRewardCount = projectRewardCount + 1;
    newreward.Title = _title;
    newreward.PledgeAmount = _plegeAmount;
    newreward.EstimatedDilivery = _estimatedDilivery;
    newreward.ShippingDetails = _shippingDetails;
    newreward.projectId = _proId;
    newreward.RewardDescription = _descr;

  }

  function getReward(uint _id) public returns(string, string, string, string, string) {

    return (projectRewardList[_id].Title, projectRewardList[_id].RewardDescription, projectRewardList[_id].PledgeAmount,
      projectRewardList[_id].EstimatedDilivery, projectRewardList[_id].ShippingDetails
    );

  }

  function getCountReward(uint proId) public returns(uint) {

proId=0 ;
    return 1;
  }

  function () payable {

    uint amount = msg.value;
    projectList[projectsCount].TotalGatherdAmount = projectList[projectsCount].TotalGatherdAmount + amount;


  }

  function VoteProject(uint proId) {
    projectList[projectsCount].voteCount = projectList[projectsCount].voteCount + 1;
    proId = 1;

  }

}

