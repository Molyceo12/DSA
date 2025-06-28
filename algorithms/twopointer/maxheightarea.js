var maxArea = (height) =>{
    var left=height.length-1;
    var right=0;
    var  maxArea=0

    while(left<right)
    {
      var newHeight=Math.min(height[left],height[right]);
      var area=(right-left)*newHeight;

      maxArea=Math.max(maxArea,area);

      if(height[left]<height[right])
      {
        left++;
      }
      else
      {
        right--
      }

    }

    return maxArea
};
