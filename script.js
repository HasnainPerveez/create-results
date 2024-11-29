function result() {
  /// Get Element Num Of Physics ///
  let totalNumOfPhy = Number(document.getElementById("totalofphy").value);
  let obtNumOfPhy = Number(document.getElementById("obtofphy").value);
  let percentageOfPhy = (obtNumOfPhy / totalNumOfPhy) * 100;
  /// Get Element Num Of Physics ///

  /// Get Element Num Of Chemistry ///
  let totalNumOfChe = Number(document.getElementById("totalofche").value);
  let obtNumOfChe = Number(document.getElementById("obtofche").value);
  let percentageOfChe = (obtNumOfChe / totalNumOfChe) * 100;
  /// Get Element Num Of Chemistry ///

  /// Get Element Num Of Math ///
  let totalNumOfMath = Number(document.getElementById("totalofmath").value);
  let obtNumOfMath = Number(document.getElementById("obtofmath").value);
  let percentageOfMath = (obtNumOfMath / totalNumOfMath) * 100;
  /// Get Element Num Of Math ///

  /// Show Number of Physics on td Element ///
  document.getElementById("phyTotal").innerText = totalNumOfPhy;
  document.getElementById("phyObtained").innerText = obtNumOfPhy;
  document.getElementById("phyPercentage").innerText = percentageOfPhy + "%";
  /// Show Number of Physics on td Element ///
  /// Check Grade of Physics ///
  if (percentageOfPhy >= 80) {
    document.getElementById("phyGrade").innerText = "A+";
  } else if (percentageOfPhy >= 70) {
    document.getElementById("phyGrade").innerText = "A";
  } else if (percentageOfPhy >= 60) {
    document.getElementById("phyGrade").innerText = "B";
  } else if (percentageOfPhy >= 50) {
    document.getElementById("phyGrade").innerText = "C";
  } else if (percentageOfPhy < 50) {
    document.getElementById("phyGrade").innerText = "Failed";
  } else if (percentageOfPhy >= 1) {
    document.getElementById("phyGrade").innerText = "Failed";
  } else {
    document.getElementById("phyGrade").innerText = "-";
  }
  /// Check Grade of Physics ///

  /// Show Number of Chemistry on td Element ///
  document.getElementById("cheTotal").innerText = totalNumOfChe;
  document.getElementById("cheObtained").innerText = obtNumOfChe;
  document.getElementById("chePercentage").innerText = percentageOfChe + "%";
  /// Show Number of Chemistry on td Element ///

  /// Check Grade of Chemistry ///
  if (percentageOfChe >= 80) {
    document.getElementById("cheGrade").innerText = "A+";
  } else if (percentageOfChe >= 70) {
    document.getElementById("cheGrade").innerText = "A";
  } else if (percentageOfChe >= 60) {
    document.getElementById("cheGrade").innerText = "B";
  } else if (percentageOfChe >= 50) {
    document.getElementById("cheGrade").innerText = "C";
  } else if (percentageOfChe < 50) {
    document.getElementById("cheGrade").innerText = "Failed";
  } else if (percentageOfChe >= 1) {
    document.getElementById("cheGrade").innerText = "Failed";
  } else {
    document.getElementById("cheGrade").innerText = "-";
  }
  /// Check Grade of Chemistry ///

  /// Show Number of Math on td Element ///
  document.getElementById("mathTotal").innerText = totalNumOfMath;
  document.getElementById("mathObtained").innerText = obtNumOfMath;
  document.getElementById("mathPercentage").innerText = percentageOfMath + "%";
  /// Show Number of Math on td Element ///

  /// Check Grade of Math ///
  if (percentageOfMath >= 80) {
    document.getElementById("mathGrade").innerText = "A+";
  } else if (percentageOfMath >= 70) {
    document.getElementById("mathGrade").innerText = "A";
  } else if (percentageOfMath >= 60) {
    document.getElementById("mathGrade").innerText = "B";
  } else if (percentageOfMath >= 50) {
    document.getElementById("mathGrade").innerText = "C";
  } else if (percentageOfMath < 50) {
    document.getElementById("mathGrade").innerText = "Failed";
  } else if (percentageOfMath >= 1) {
    document.getElementById("mathGrade").innerText = "Failed";
  } else {
    document.getElementById("mathGrade").innerText = "-";
  }
  /// Check Grade of Math ///

  /// Get Element Of All///
  let all_Subject_Total = totalNumOfPhy + totalNumOfChe + totalNumOfMath;
  let all_Subject_Obtained = obtNumOfPhy + obtNumOfChe + obtNumOfMath;
  let all_Subject_Percentage = (all_Subject_Obtained / all_Subject_Total) * 100;
  /// Get Element Of All ///

  /// Show All on td Element ///
  document.getElementById("allTotal").innerText = all_Subject_Total;
  document.getElementById("allObtained").innerText = all_Subject_Obtained;
  document.getElementById("allPercentage").innerText = all_Subject_Percentage;
  /// Show All on td Element ///

    /// Check Grade of All ///
    if (all_Subject_Percentage >= 80) {
        document.getElementById("allGrade").innerText = "A+";
      } else if (all_Subject_Percentage >= 70) {
        document.getElementById("allGrade").innerText = "A";
      } else if (all_Subject_Percentage >= 60) {
        document.getElementById("allGrade").innerText = "B";
      } else if (all_Subject_Percentage >= 50) {
        document.getElementById("allGrade").innerText = "C";
      } else if (all_Subject_Percentage < 50) {
        document.getElementById("allGrade").innerText = "Failed";
      } else if (all_Subject_Percentage >= 1) {
        document.getElementById("allGrade").innerText = "Failed";
      } else {
        document.getElementById("allGrade").innerText = "-";
      }
      /// Check Grade of All ///
}
