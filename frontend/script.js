    async function fetchData() {
        try {
            const response = await fetch('data.json'); 
            const data = await response.json();

            document.getElementById('participatesCount').innerText = data.participatesCount;
            document.getElementById('selectedParticipatesCount').innerText = data.selectedParticipates;
            document.getElementById('zeroParticipatesCheckbox').checked = data.customParticipates.selectZero;

            document.getElementById('selectAllCheckbox').checked = data.participatesSelection.selectAll;
            document.getElementById('customersCheckbox').checked = data.participatesSelection.customers;
            document.getElementById('leadsCheckbox').checked = data.participatesSelection.leads;
            document.getElementById('externalDataCheckbox').checked = data.participatesSelection.externalData;

            populateDropdown('sourceTypeDropdown', data.dropdownValues.sourceType);
            populateDropdown('sourceNameDropdown', data.dropdownValues.sourceName);
            populateDropdown('includeTagDropdown', data.dropdownValues.includeTag);
            populateDropdown('excludeTagDropdown', data.dropdownValues.excludeTag);

            document.getElementById('participatesSpentCheckbox').checked = data.purchaseHistory.participatesSpent;
            document.getElementById('spentMoreThanInput').value = data.purchaseHistory.spentMoreThan;
            document.getElementById('Count').value = data.purchaseHistory.Count;
            document.getElementById('spentOnceInput').value = data.purchaseHistory.spentOnceLastDays;
            document.getElementById('spentCount').value = data.purchaseHistory.spentCount;
            document.getElementById('spentType').value = data.purchaseHistory.spentType;

            document.getElementById('frequencyOfVisitInput').value = data.frequencyOfVisit;

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function populateDropdown(dropdownId, selectedValue) {
        const dropdown = document.getElementById(dropdownId);
        const option = document.createElement('option');
        option.value = selectedValue;
        option.text = selectedValue;
        dropdown.appendChild(option);
    }

    function clearFields() {
        document.getElementById('participatesCount').innerText = 'loading...';
        document.getElementById('selectedParticipatesCount').innerText = 'loading...';
        document.getElementById('zeroParticipatesCheckbox').checked = false;
        document.getElementById('selectAllCheckbox').checked = false;
        document.getElementById('customersCheckbox').checked = false;
        document.getElementById('leadsCheckbox').checked = false;
        document.getElementById('externalDataCheckbox').checked = false;
        
        document.getElementById('sourceTypeDropdown').selectedIndex = 0;
        document.getElementById('sourceNameDropdown').selectedIndex = 0;
        document.getElementById('includeTagDropdown').selectedIndex = 0;
        document.getElementById('excludeTagDropdown').selectedIndex = 0;
        
        document.getElementById('participatesSpentCheckbox').checked = false;
        document.getElementById('spentMoreThanInput').value = '';
        document.getElementById('Count').value = '';
        document.getElementById('spentOnceInput').value = '';
        document.getElementById('spentCount').value = '';
        document.getElementById('spentType').value = '';
        
        document.getElementById('frequencyOfVisitInput').value = '';
    }

    window.onload = fetchData;
