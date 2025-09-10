// Global variables
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let nextId = parseInt(localStorage.getItem('nextId')) || 1000;
let expenseChart;
let currentFilter = 'all';

// Category configurations
const categoryConfig = {
    food: { name: 'Yiyecek', icon: 'fas fa-utensils', color: '#fed7e2' },
    transport: { name: 'Ulaşım', icon: 'fas fa-car', color: '#bee3f8' },
    shopping: { name: 'Alışveriş', icon: 'fas fa-shopping-bag', color: '#c6f6d5' },
    bills: { name: 'Faturalar', icon: 'fas fa-file-invoice', color: '#feebc8' },
    salary: { name: 'Maaş', icon: 'fas fa-money-check-alt', color: '#d6f5d6' },
    freelance: { name: 'Serbest İş', icon: 'fas fa-laptop-code', color: '#e6fffa' },
    investment: { name: 'Yatırım', icon: 'fas fa-chart-line', color: '#fef5e7' },
    other: { name: 'Diğer', icon: 'fas fa-ellipsis-h', color: '#edf2f7' }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    loadTransactions();
    updateStats();
    initChart();
    setupFilters();
    setupForm();
    loadRecentActivities();
    
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    document.querySelector('input[name="date"]').value = today;
    
    // Add sample data if no transactions exist
    if (transactions.length === 0) {
        addSampleData();
    }
}

// Add sample data for demonstration
function addSampleData() {
    const sampleTransactions = [
        {
            id: nextId++,
            type: 'expense',
            description: 'Market alışverişi',
            category: 'food',
            amount: 250.50,
            date: '2024-01-15',
            timestamp: new Date('2024-01-15T10:30:00').toISOString()
        },
        {
            id: nextId++,
            type: 'income',
            description: 'Maaş',
            category: 'salary',
            amount: 5000.00,
            date: '2024-01-01',
            timestamp: new Date('2024-01-01T09:00:00').toISOString()
        },
        {
            id: nextId++,
            type: 'expense',
            description: 'Otobüs kartı',
            category: 'transport',
            amount: 50.00,
            date: '2024-01-10',
            timestamp: new Date('2024-01-10T08:15:00').toISOString()
        },
        {
            id: nextId++,
            type: 'expense',
            description: 'Elektrik faturası',
            category: 'bills',
            amount: 180.75,
            date: '2024-01-12',
            timestamp: new Date('2024-01-12T14:20:00').toISOString()
        },
        {
            id: nextId++,
            type: 'income',
            description: 'Freelance proje',
            category: 'freelance',
            amount: 800.00,
            date: '2024-01-08',
            timestamp: new Date('2024-01-08T16:45:00').toISOString()
        }
    ];

    transactions = sampleTransactions;
    saveData();
    loadTransactions();
    updateStats();
    updateChart();
    loadRecentActivities();
}

// Modal functions
function openModal() {
    document.getElementById('transactionModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('transactionModal').classList.remove('active');
    document.getElementById('transactionForm').reset();
    document.querySelector('input[name="date"]').value = new Date().toISOString().split('T')[0];
    document.body.style.overflow = 'auto';
}

// Setup form submission
function setupForm() {
    const form = document.getElementById('transactionForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const transaction = {
            id: nextId++,
            type: formData.get('type'),
            description: formData.get('description'),
            category: formData.get('category'),
            amount: parseFloat(formData.get('amount')),
            date: formData.get('date'),
            timestamp: new Date().toISOString()
        };

        transactions.unshift(transaction);
        saveData();
        loadTransactions();
        updateStats();
        updateChart();
        loadRecentActivities();
        closeModal();
        
        // Show success message
        showNotification('İşlem başarıyla eklendi!', 'success');
    });
}

// Setup filter buttons
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-filter');
            loadTransactions();
        });
    });
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('nextId', nextId.toString());
}

// Load and display transactions
function loadTransactions() {
    const container = document.getElementById('transactionsList');
    const filteredTransactions = getFilteredTransactions();
    
    if (filteredTransactions.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-receipt"></i>
                <h3>Henüz işlem yok</h3>
                <p>İlk işleminizi ekleyerek başlayın</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredTransactions.map(transaction => `
        <div class="transaction-row">
            <div class="transaction-id">#${transaction.id}</div>
            <div class="transaction-desc">${transaction.description}</div>
            <div class="transaction-category category-${transaction.category}">
                ${categoryConfig[transaction.category]?.name || transaction.category}
            </div>
            <div class="transaction-type type-${transaction.type}">
                ${transaction.type === 'income' ? 'Gelir' : 'Gider'}
            </div>
            <div class="transaction-amount amount-${transaction.type}">
                ${transaction.type === 'income' ? '+' : '-'}₺${transaction.amount.toLocaleString('tr-TR', {minimumFractionDigits: 2})}
            </div>
            <div class="transaction-actions">
                <button class="action-btn edit-btn" onclick="editTransaction(${transaction.id})" title="Düzenle">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn delete-btn" onclick="deleteTransaction(${transaction.id})" title="Sil">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Get filtered transactions
function getFilteredTransactions() {
    let filtered = transactions;
    
    switch(currentFilter) {
        case 'income':
            filtered = transactions.filter(t => t.type === 'income');
            break;
        case 'expense':
            filtered = transactions.filter(t => t.type === 'expense');
            break;
        case 'all':
        default:
            filtered = transactions;
            break;
    }
    
    return filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

// Update statistics
function updateStats() {
    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
    
    const totalExpense = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);
    
    const balance = totalIncome - totalExpense;
    const waitingCount = transactions.filter(t => {
        const transactionDate = new Date(t.date);
        const today = new Date();
        return transactionDate > today;
    }).length;

    document.getElementById('waitingCount').textContent = waitingCount;
    document.getElementById('incomeAmount').textContent = `₺${totalIncome.toLocaleString('tr-TR')}`;
    document.getElementById('expenseAmount').textContent = `₺${totalExpense.toLocaleString('tr-TR')}`;
    document.getElementById('balanceAmount').textContent = `₺${balance.toLocaleString('tr-TR')}`;
    
    // Update balance color based on positive/negative
    const balanceElement = document.getElementById('balanceAmount');
    if (balance >= 0) {
        balanceElement.style.color = '#38a169';
    } else {
        balanceElement.style.color = '#e53e3e';
    }
}

// Initialize chart
function initChart() {
    const ctx = document.getElementById('expenseChart');
    if (!ctx) return;

    expenseChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: [
                    '#FF6B6B',
                    '#4ECDC4',
                    '#45B7D1',
                    '#96CEB4',
                    '#FFEAA7',
                    '#DDA0DD',
                    '#98D8C8',
                    '#F7DC6F'
                ],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    }
                }
            }
        }
    });
    
    updateChart();
}

// Update chart data
function updateChart() {
    if (!expenseChart) return;

    const expenseTransactions = transactions.filter(t => t.type === 'expense');
    const categoryTotals = {};
    
    expenseTransactions.forEach(t => {
        const categoryName = categoryConfig[t.category]?.name || t.category;
        categoryTotals[categoryName] = (categoryTotals[categoryName] || 0) + t.amount;
    });
    
    const labels = Object.keys(categoryTotals);
    const data = Object.values(categoryTotals);
    
    expenseChart.data.labels = labels;
    expenseChart.data.datasets[0].data = data;
    expenseChart.update();
}

// Load recent activities
function loadRecentActivities() {
    const container = document.getElementById('recentActivities');
    const recentTransactions = transactions
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 5);

    if (recentTransactions.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-history"></i>
                <p>Henüz aktivite yok</p>
            </div>
        `;
        return;
    }

    container.innerHTML = recentTransactions.map(transaction => {
        const config = categoryConfig[transaction.category] || categoryConfig.other;
        const timeAgo = getTimeAgo(transaction.timestamp);
        
        return `
            <div class="recent-item">
                <div class="recent-icon" style="background: linear-gradient(135deg, ${config.color}, ${adjustColor(config.color, -20)})">
                    <i class="${config.icon}"></i>
                </div>
                <div class="recent-info">
                    <div class="recent-desc">${transaction.description}</div>
                    <div class="recent-time">${timeAgo}</div>
                </div>
                <div class="recent-amount ${transaction.type === 'income' ? 'amount-income' : 'amount-expense'}">
                    ${transaction.type === 'income' ? '+' : '-'}₺${transaction.amount.toLocaleString('tr-TR')}
                </div>
            </div>
        `;
    }).join('');
}

// Delete transaction
function deleteTransaction(id) {
    if (confirm('Bu işlemi silmek istediğinizden emin misiniz?')) {
        transactions = transactions.filter(t => t.id !== id);
        saveData();
        loadTransactions();
        updateStats();
        updateChart();
        loadRecentActivities();
        showNotification('İşlem silindi', 'success');
    }
}

// Edit transaction (placeholder for future implementation)
function editTransaction(id) {
    showNotification('Düzenleme özelliği yakında eklenecek!', 'info');
}

// Utility functions
function getTimeAgo(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInMinutes = Math.floor((now - past) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Az önce';
    if (diffInMinutes < 60) return `${diffInMinutes} dakika önce`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} saat önce`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays} gün önce`;
    
    return past.toLocaleDateString('tr-TR');
}

function adjustColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => 
        ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2)
    );
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#667eea'};
        color: white;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('transactionModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Export functions for global access
window.openModal = openModal;
window.closeModal = closeModal;
window.deleteTransaction = deleteTransaction;
window.editTransaction = editTransaction;